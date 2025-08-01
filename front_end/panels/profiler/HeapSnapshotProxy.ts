/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import * as Common from '../../core/common/common.js';
import * as i18n from '../../core/i18n/i18n.js';
import type * as HeapSnapshotModel from '../../models/heap_snapshot_model/heap_snapshot_model.js';

import type {ChildrenProvider} from './ChildrenProvider.js';

const UIStrings = {
  /**
   *@description Text in Heap Snapshot Proxy of a profiler tool
   *@example {functionName} PH1
   */
  anErrorOccurredWhenACallToMethod: 'An error occurred when a call to method \'\'{PH1}\'\' was requested',
} as const;
const str_ = i18n.i18n.registerUIStrings('panels/profiler/HeapSnapshotProxy.ts', UIStrings);
const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);
export class HeapSnapshotWorkerProxy extends Common.ObjectWrapper.ObjectWrapper<HeapSnapshotWorkerProxy.EventTypes> {
  // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly eventHandler: (arg0: string, arg1: any) => void;
  nextObjectId: number;
  nextCallId: number;
  // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callbacks: Map<number, (arg0: any) => void>;
  readonly previousCallbacks: Set<number>;
  readonly worker: Common.Worker.WorkerWrapper;
  interval?: number;
  // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(eventHandler: (arg0: string, arg1: any) => void) {
    super();
    this.eventHandler = eventHandler;
    this.nextObjectId = 1;
    this.nextCallId = 1;
    this.callbacks = new Map();
    this.previousCallbacks = new Set();
    this.worker = Common.Worker.WorkerWrapper.fromURL(
        new URL('../../entrypoints/heap_snapshot_worker/heap_snapshot_worker-entrypoint.js', import.meta.url));
    this.worker.onmessage = this.messageReceived.bind(this);
  }

  createLoader(profileUid: number, snapshotReceivedCallback: (arg0: HeapSnapshotProxy) => void):
      HeapSnapshotLoaderProxy {
    const objectId = this.nextObjectId++;
    const proxy = new HeapSnapshotLoaderProxy(this, objectId, profileUid, snapshotReceivedCallback);
    this.postMessage({
      callId: this.nextCallId++,
      disposition: 'createLoader',
      objectId,
    });
    return proxy;
  }

  dispose(): void {
    this.worker.terminate();
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  disposeObject(objectId: number): void {
    this.postMessage({callId: this.nextCallId++, disposition: 'dispose', objectId});
  }

  evaluateForTest(script: string, callback: (...arg0: any[]) => void): void {
    const callId = this.nextCallId++;
    this.callbacks.set(callId, callback);
    this.postMessage({callId, disposition: 'evaluateForTest', source: script});
  }

  callFactoryMethod<T extends Object>(
      callback: null, objectId: string, methodName: string, proxyConstructor: new(...arg1: any[]) => T,
      transfer: Transferable[], ...methodArguments: any[]): T;
  callFactoryMethod<T extends Object>(
      callback: ((...arg0: any[]) => void), objectId: string, methodName: string,
      proxyConstructor: new(...arg1: any[]) => T, transfer: Transferable[], ...methodArguments: any[]): null;
  callFactoryMethod<T extends Object>(
      callback: ((...arg0: any[]) => void)|null, objectId: string, methodName: string,
      proxyConstructor: new(...arg1: any[]) => T, transfer: Transferable[], ...methodArguments: any[]): T|null {
    const callId = this.nextCallId++;
    const newObjectId = this.nextObjectId++;

    if (callback) {
      this.callbacks.set(callId, remoteResult => {
        callback(remoteResult ? new proxyConstructor(this, newObjectId) : null);
      });
      this.postMessage(
          {
            callId,
            disposition: 'factory',
            objectId,
            methodName,
            methodArguments,
            newObjectId,
          },
          transfer);
      return null;
    }
    this.postMessage(
        {
          callId,
          disposition: 'factory',
          objectId,
          methodName,
          methodArguments,
          newObjectId,
        },
        transfer);
    return new proxyConstructor(this, newObjectId);
  }

  callMethod(callback: (...arg0: any[]) => void, objectId: string, methodName: string, ...methodArguments: any[]):
      void {
    const callId = this.nextCallId++;
    if (callback) {
      this.callbacks.set(callId, callback);
    }
    this.postMessage({
      callId,
      disposition: 'method',
      objectId,
      methodName,
      methodArguments,
    });
  }

  startCheckingForLongRunningCalls(): void {
    if (this.interval) {
      return;
    }
    this.checkLongRunningCalls();
    this.interval = window.setInterval(this.checkLongRunningCalls.bind(this), 300);
  }

  checkLongRunningCalls(): void {
    for (const callId of this.previousCallbacks) {
      if (!this.callbacks.has(callId)) {
        this.previousCallbacks.delete(callId);
      }
    }
    const hasLongRunningCalls = Boolean(this.previousCallbacks.size);
    this.dispatchEventToListeners(HeapSnapshotWorkerProxy.Events.WAIT, hasLongRunningCalls);
    for (const callId of this.callbacks.keys()) {
      this.previousCallbacks.add(callId);
    }
  }

  setupForSecondaryInit(port: MessagePort): Promise<void> {
    const callId = this.nextCallId++;
    const done = new Promise<void>(resolve => {
      this.callbacks.set(callId, resolve);
    });
    this.postMessage(
        {
          callId,
          disposition: 'setupForSecondaryInit',
          objectId: this.nextObjectId++,
        },
        [port]);
    return done;
  }

  // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messageReceived(event: MessageEvent<any>): void {
    const data = event.data;
    if (data.eventName) {
      if (this.eventHandler) {
        this.eventHandler(data.eventName, data.data);
      }
      return;
    }
    if (data.error) {
      if (data.errorMethodName) {
        Common.Console.Console.instance().error(
            i18nString(UIStrings.anErrorOccurredWhenACallToMethod, {PH1: data.errorMethodName}));
      }
      Common.Console.Console.instance().error(data['errorCallStack']);
      this.callbacks.delete(data.callId);
      return;
    }
    const callback = this.callbacks.get(data.callId);
    if (!callback) {
      return;
    }
    this.callbacks.delete(data.callId);
    callback(data.result);
  }

  // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postMessage(message: any, transfer?: Transferable[]): void {
    this.worker.postMessage(message, transfer);
  }
}

export namespace HeapSnapshotWorkerProxy {
  export const enum Events {
    WAIT = 'Wait',
  }

  export interface EventTypes {
    [Events.WAIT]: boolean;
  }
}

export class HeapSnapshotProxyObject {
  readonly worker: HeapSnapshotWorkerProxy;
  readonly objectId: number;
  constructor(worker: HeapSnapshotWorkerProxy, objectId: number) {
    this.worker = worker;
    this.objectId = objectId;
  }

  dispose(): void {
    this.worker.disposeObject(this.objectId);
  }

  callFactoryMethod<T extends Object>(methodName: string, proxyConstructor: new(...arg1: any[]) => T, ...args: any[]):
      T {
    return this.worker.callFactoryMethod(null, String(this.objectId), methodName, proxyConstructor, [], ...args);
  }

  callFactoryMethodPromise<T extends Object>(
      methodName: string, proxyConstructor: new(...arg1: any[]) => T, transfer: Transferable[],
      ...args: any[]): Promise<T> {
    return new Promise(
        resolve => this.worker.callFactoryMethod(
            resolve, String(this.objectId), methodName, proxyConstructor, transfer, ...args));
  }

  callMethodPromise<T>(methodName: string, ...args: any[]): Promise<T> {
    return new Promise(resolve => this.worker.callMethod(resolve, String(this.objectId), methodName, ...args));
  }
}

export class HeapSnapshotLoaderProxy extends HeapSnapshotProxyObject implements Common.StringOutputStream.OutputStream {
  readonly profileUid: number;
  readonly snapshotReceivedCallback: (arg0: HeapSnapshotProxy) => void;
  constructor(
      worker: HeapSnapshotWorkerProxy, objectId: number, profileUid: number,
      snapshotReceivedCallback: (arg0: HeapSnapshotProxy) => void) {
    super(worker, objectId);
    this.profileUid = profileUid;
    this.snapshotReceivedCallback = snapshotReceivedCallback;
  }

  async write(chunk: string): Promise<void> {
    await this.callMethodPromise('write', chunk);
  }

  async close(): Promise<void> {
    await this.callMethodPromise('close');
    const secondWorker = new HeapSnapshotWorkerProxy(() => {});
    const channel = new MessageChannel();
    await secondWorker.setupForSecondaryInit(channel.port2);
    const snapshotProxy = await this.callFactoryMethodPromise('buildSnapshot', HeapSnapshotProxy, [channel.port1]);
    secondWorker.dispose();
    this.dispose();
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
    // @ts-expect-error
    snapshotProxy.setProfileUid(this.profileUid);
    await snapshotProxy.updateStaticData();
    this.snapshotReceivedCallback(snapshotProxy);
  }
}

export class HeapSnapshotProxy extends HeapSnapshotProxyObject {
  staticData: HeapSnapshotModel.HeapSnapshotModel.StaticData|null;
  profileUid?: string;

  constructor(worker: HeapSnapshotWorkerProxy, objectId: number) {
    super(worker, objectId);
    this.staticData = null;
  }

  search(
      searchConfig: HeapSnapshotModel.HeapSnapshotModel.SearchConfig,
      filter: HeapSnapshotModel.HeapSnapshotModel.NodeFilter): Promise<number[]> {
    return this.callMethodPromise('search', searchConfig, filter);
  }

  interfaceDefinitions(): Promise<string> {
    return this.callMethodPromise('interfaceDefinitions');
  }

  aggregatesWithFilter(filter: HeapSnapshotModel.HeapSnapshotModel.NodeFilter):
      Promise<Record<string, HeapSnapshotModel.HeapSnapshotModel.Aggregate>> {
    return this.callMethodPromise('aggregatesWithFilter', filter);
  }

  aggregatesForDiff(interfaceDefinitions: string):
      Promise<Record<string, HeapSnapshotModel.HeapSnapshotModel.AggregateForDiff>> {
    return this.callMethodPromise('aggregatesForDiff', interfaceDefinitions);
  }

  calculateSnapshotDiff(
      baseSnapshotId: string,
      baseSnapshotAggregates: Record<string, HeapSnapshotModel.HeapSnapshotModel.AggregateForDiff>,
      ): Promise<Record<string, HeapSnapshotModel.HeapSnapshotModel.Diff>> {
    return this.callMethodPromise('calculateSnapshotDiff', baseSnapshotId, baseSnapshotAggregates);
  }

  nodeClassKey(snapshotObjectId: number): Promise<string|null> {
    return this.callMethodPromise('nodeClassKey', snapshotObjectId);
  }

  createEdgesProvider(nodeIndex: number): HeapSnapshotProviderProxy {
    return this.callFactoryMethod('createEdgesProvider', HeapSnapshotProviderProxy, nodeIndex);
  }

  createRetainingEdgesProvider(nodeIndex: number): HeapSnapshotProviderProxy {
    return this.callFactoryMethod('createRetainingEdgesProvider', HeapSnapshotProviderProxy, nodeIndex);
  }

  createAddedNodesProvider(baseSnapshotId: string, classKey: string): HeapSnapshotProviderProxy {
    return this.callFactoryMethod('createAddedNodesProvider', HeapSnapshotProviderProxy, baseSnapshotId, classKey);
  }

  createDeletedNodesProvider(nodeIndexes: number[]): HeapSnapshotProviderProxy {
    return this.callFactoryMethod('createDeletedNodesProvider', HeapSnapshotProviderProxy, nodeIndexes);
  }

  createNodesProvider(filter: (...args: any[]) => boolean): HeapSnapshotProviderProxy {
    return this.callFactoryMethod('createNodesProvider', HeapSnapshotProviderProxy, filter);
  }

  createNodesProviderForClass(classKey: string, nodeFilter: HeapSnapshotModel.HeapSnapshotModel.NodeFilter):
      HeapSnapshotProviderProxy {
    return this.callFactoryMethod('createNodesProviderForClass', HeapSnapshotProviderProxy, classKey, nodeFilter);
  }

  allocationTracesTops(): Promise<HeapSnapshotModel.HeapSnapshotModel.SerializedAllocationNode[]> {
    return this.callMethodPromise('allocationTracesTops');
  }

  allocationNodeCallers(nodeId: number): Promise<HeapSnapshotModel.HeapSnapshotModel.AllocationNodeCallers> {
    return this.callMethodPromise('allocationNodeCallers', nodeId);
  }

  allocationStack(nodeIndex: number): Promise<HeapSnapshotModel.HeapSnapshotModel.AllocationStackFrame[]|null> {
    return this.callMethodPromise('allocationStack', nodeIndex);
  }

  override dispose(): void {
    throw new Error('Should never be called');
  }

  get nodeCount(): number {
    if (!this.staticData) {
      return 0;
    }
    return this.staticData.nodeCount;
  }

  get rootNodeIndex(): number {
    if (!this.staticData) {
      return 0;
    }
    return this.staticData.rootNodeIndex;
  }

  async updateStaticData(): Promise<void> {
    this.staticData = await this.callMethodPromise('updateStaticData');
  }

  getStatistics(): Promise<HeapSnapshotModel.HeapSnapshotModel.Statistics> {
    return this.callMethodPromise('getStatistics');
  }

  getLocation(nodeIndex: number): Promise<HeapSnapshotModel.HeapSnapshotModel.Location|null> {
    return this.callMethodPromise('getLocation', nodeIndex);
  }

  getSamples(): Promise<HeapSnapshotModel.HeapSnapshotModel.Samples|null> {
    return this.callMethodPromise('getSamples');
  }

  ignoreNodeInRetainersView(nodeIndex: number): Promise<void> {
    return this.callMethodPromise('ignoreNodeInRetainersView', nodeIndex);
  }

  unignoreNodeInRetainersView(nodeIndex: number): Promise<void> {
    return this.callMethodPromise('unignoreNodeInRetainersView', nodeIndex);
  }

  unignoreAllNodesInRetainersView(): Promise<void> {
    return this.callMethodPromise('unignoreAllNodesInRetainersView');
  }

  areNodesIgnoredInRetainersView(): Promise<boolean> {
    return this.callMethodPromise('areNodesIgnoredInRetainersView');
  }

  get totalSize(): number {
    if (!this.staticData) {
      return 0;
    }
    return this.staticData.totalSize;
  }

  get uid(): string|undefined {
    return this.profileUid;
  }

  setProfileUid(profileUid: string): void {
    this.profileUid = profileUid;
  }

  maxJSObjectId(): number {
    if (!this.staticData) {
      return 0;
    }
    return this.staticData.maxJSObjectId;
  }
}

export class HeapSnapshotProviderProxy extends HeapSnapshotProxyObject implements ChildrenProvider {
  nodePosition(snapshotObjectId: number): Promise<number> {
    return this.callMethodPromise('nodePosition', snapshotObjectId);
  }

  isEmpty(): Promise<boolean> {
    return this.callMethodPromise('isEmpty');
  }

  serializeItemsRange(startPosition: number, endPosition: number):
      Promise<HeapSnapshotModel.HeapSnapshotModel.ItemsRange> {
    return this.callMethodPromise('serializeItemsRange', startPosition, endPosition);
  }

  async sortAndRewind(comparator: HeapSnapshotModel.HeapSnapshotModel.ComparatorConfig): Promise<void> {
    await this.callMethodPromise('sortAndRewind', comparator);
  }
}
