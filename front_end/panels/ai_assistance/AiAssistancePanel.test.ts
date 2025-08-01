// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import * as Common from '../../core/common/common.js';
import * as Host from '../../core/host/host.js';
import * as Platform from '../../core/platform/platform.js';
import * as SDK from '../../core/sdk/sdk.js';
import * as AiAssistanceModel from '../../models/ai_assistance/ai_assistance.js';
import * as Trace from '../../models/trace/trace.js';
import * as Workspace from '../../models/workspace/workspace.js';
import {
  cleanup,
  createAiAssistancePanel,
  createNetworkRequest,
  mockAidaClient,
  openHistoryContextMenu
} from '../../testing/AiAssistanceHelpers.js';
import {findMenuItemWithLabel} from '../../testing/ContextMenuHelpers.js';
import {
  createTarget,
  describeWithEnvironment,
  registerNoopActions,
  updateHostConfig
} from '../../testing/EnvironmentHelpers.js';
import {expectCall} from '../../testing/ExpectStubCall.js';
import {describeWithMockConnection} from '../../testing/MockConnection.js';
import {createNetworkPanelForMockConnection} from '../../testing/NetworkHelpers.js';
import {TraceLoader} from '../../testing/TraceLoader.js';
import * as Snackbars from '../../ui/components/snackbars/snackbars.js';
import * as UI from '../../ui/legacy/legacy.js';
import * as Elements from '../elements/elements.js';
import * as Network from '../network/network.js';
import * as Sources from '../sources/sources.js';
import type * as TimelineComponents from '../timeline/components/components.js';
import * as Timeline from '../timeline/timeline.js';
import * as TimelineUtils from '../timeline/utils/utils.js';

import * as AiAssistancePanel from './ai_assistance.js';

const {urlString} = Platform.DevToolsPath;

describeWithMockConnection('AI Assistance Panel', () => {
  beforeEach(() => {
    registerNoopActions([
      'elements.toggle-element-search', 'timeline.record-reload', 'timeline.toggle-recording', 'timeline.show-history',
      'components.collect-garbage'
    ]);

    UI.Context.Context.instance().setFlavor(Elements.ElementsPanel.ElementsPanel, null);
    UI.Context.Context.instance().setFlavor(Network.NetworkPanel.NetworkPanel, null);
    UI.Context.Context.instance().setFlavor(Sources.SourcesPanel.SourcesPanel, null);
    UI.Context.Context.instance().setFlavor(Timeline.TimelinePanel.TimelinePanel, null);
    UI.Context.Context.instance().setFlavor(SDK.NetworkRequest.NetworkRequest, null);
    UI.Context.Context.instance().setFlavor(SDK.DOMModel.DOMNode, null);
    UI.Context.Context.instance().setFlavor(TimelineUtils.AIContext.AgentFocus, null);
    UI.Context.Context.instance().setFlavor(Workspace.UISourceCode.UISourceCode, null);
  });

  afterEach(() => {
    cleanup();
  });

  describe('consent view', () => {
    it('should render chat view when no account email', async () => {
      const {view} =
          await createAiAssistancePanel({aidaAvailability: Host.AidaClient.AidaAccessPreconditions.NO_ACCOUNT_EMAIL});
      assert.strictEqual(view.input.state, AiAssistancePanel.State.CHAT_VIEW);
    });

    it('should render chat view when sync paused', async () => {
      const {view} =
          await createAiAssistancePanel({aidaAvailability: Host.AidaClient.AidaAccessPreconditions.SYNC_IS_PAUSED});
      assert.strictEqual(view.input.state, AiAssistancePanel.State.CHAT_VIEW);
    });

    it('should render chat view when no internet', async () => {
      const {view} =
          await createAiAssistancePanel({aidaAvailability: Host.AidaClient.AidaAccessPreconditions.NO_INTERNET});
      assert.strictEqual(view.input.state, AiAssistancePanel.State.CHAT_VIEW);
    });

    it('should render consent view when the consent is not given before', async () => {
      const {view} = await createAiAssistancePanel();
      assert.strictEqual(view.input.state, AiAssistancePanel.State.CONSENT_VIEW);
    });

    it('should switch from consent view to empty state when enabling setting', async () => {
      const {view} = await createAiAssistancePanel();
      assert.strictEqual(view.input.state, AiAssistancePanel.State.CONSENT_VIEW);
      Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
      assert.strictEqual((await view.nextInput).state, AiAssistancePanel.State.EXPLORE_VIEW);
    });

    it('should render empty state when the consent is given before', async () => {
      Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
      const {view} = await createAiAssistancePanel();
      assert.strictEqual(view.input.state, AiAssistancePanel.State.EXPLORE_VIEW);
    });

    it('should render the consent view when the setting is disabled', async () => {
      Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
      Common.Settings.moduleSetting('ai-assistance-enabled').setDisabled(true);
      const {view} = await createAiAssistancePanel();
      assert.strictEqual(view.input.state, AiAssistancePanel.State.CONSENT_VIEW);
      Common.Settings.moduleSetting('ai-assistance-enabled').setDisabled(false);
    });

    it('should render the consent view when blocked by age', async () => {
      Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
      updateHostConfig({
        aidaAvailability: {
          blockedByAge: true,
        },
        devToolsFreestyler: {
          enabled: true,
        },
      });
      const {view} = await createAiAssistancePanel();
      assert.strictEqual(view.input.state, AiAssistancePanel.State.CONSENT_VIEW);
    });

    it('updates when the user logs in', async () => {
      Common.Settings.moduleSetting('ai-assistance-enabled').set(true);

      const {view, stubAidaCheckAccessPreconditions} =
          await createAiAssistancePanel({aidaAvailability: Host.AidaClient.AidaAccessPreconditions.NO_ACCOUNT_EMAIL});

      assert.strictEqual(view.input.state, AiAssistancePanel.State.CHAT_VIEW);
      assert.strictEqual(view.input.aidaAvailability, Host.AidaClient.AidaAccessPreconditions.NO_ACCOUNT_EMAIL);

      stubAidaCheckAccessPreconditions(Host.AidaClient.AidaAccessPreconditions.AVAILABLE);

      Host.AidaClient.HostConfigTracker.instance().dispatchEventToListeners(
          Host.AidaClient.Events.AIDA_AVAILABILITY_CHANGED);

      assert.strictEqual((await view.nextInput).state, AiAssistancePanel.State.EXPLORE_VIEW);
      assert.strictEqual(view.input.aidaAvailability, Host.AidaClient.AidaAccessPreconditions.AVAILABLE);
    });
  });

  describe('rating', () => {
    it('should allow logging if configured', async () => {
      updateHostConfig({
        aidaAvailability: {
          disallowLogging: false,
        },
      });
      const {aidaClient, view} = await createAiAssistancePanel();

      const aidaClientCall = expectCall(aidaClient.registerClientEvent as sinon.SinonStub);
      view.input.onFeedbackSubmit(0, Host.AidaClient.Rating.POSITIVE);

      const [aidaClientEvent] = await aidaClientCall;
      assert.isFalse(aidaClientEvent.disable_user_content_logging);
    });

    it('should send POSITIVE rating to aida client when the user clicks on positive rating', async () => {
      updateHostConfig({
        aidaAvailability: {
          enabled: true,
          disallowLogging: true,
        }
      });
      const RPC_ID = 999;
      const {aidaClient, view} = await createAiAssistancePanel();

      const aidaClientCall = expectCall(aidaClient.registerClientEvent as sinon.SinonStub);
      view.input.onFeedbackSubmit(RPC_ID, Host.AidaClient.Rating.POSITIVE);
      const [aidaClientEvent] = await aidaClientCall;

      assert.deepEqual(aidaClientEvent, {
        corresponding_aida_rpc_global_id: RPC_ID,
        do_conversation_client_event: {
          user_feedback: {
            sentiment: 'POSITIVE',
            user_input: {
              comment: undefined,
            }
          },
        },
        disable_user_content_logging: true,
      });
    });

    it('should send NEGATIVE rating to aida client when the user clicks on negative rating', async () => {
      updateHostConfig({
        aidaAvailability: {
          enabled: true,
          disallowLogging: true,
        }
      });
      const RPC_ID = 999;
      const {aidaClient, view} = await createAiAssistancePanel();

      const aidaClientCall = expectCall(aidaClient.registerClientEvent as sinon.SinonStub);
      view.input.onFeedbackSubmit(RPC_ID, Host.AidaClient.Rating.NEGATIVE);
      const [aidaClientEvent] = await aidaClientCall;

      assert.deepEqual(aidaClientEvent, {
        corresponding_aida_rpc_global_id: RPC_ID,
        do_conversation_client_event: {
          user_feedback: {
            sentiment: 'NEGATIVE',
            user_input: {
              comment: undefined,
            }
          },
        },
        disable_user_content_logging: true,
      });
    });

    it('should send feedback text with data', async () => {
      updateHostConfig({
        aidaAvailability: {
          enabled: true,
          disallowLogging: true,
        }
      });
      const feedback = 'This helped me a ton.';
      const RPC_ID = 999;
      const {aidaClient, view} = await createAiAssistancePanel();
      const aidaClientCall = expectCall(aidaClient.registerClientEvent as sinon.SinonStub);
      view.input.onFeedbackSubmit(RPC_ID, Host.AidaClient.Rating.POSITIVE, feedback);
      const [aidaClientEvent] = await aidaClientCall;
      assert.deepEqual(aidaClientEvent, {
        corresponding_aida_rpc_global_id: RPC_ID,
        do_conversation_client_event: {
          user_feedback: {
            sentiment: 'POSITIVE',
            user_input: {
              comment: feedback,
            }
          },
        },
        disable_user_content_logging: true,
      });
    });
  });

  describe('contexts', () => {
    const tests = [
      {
        flavor: SDK.DOMModel.DOMNode,
        createContext: () => {
          const node = sinon.createStubInstance(SDK.DOMModel.DOMNode, {
            nodeType: Node.ELEMENT_NODE,
          });
          sinon.stub(AiAssistanceModel.NodeContext.prototype, 'getSuggestions')
              .returns(Promise.resolve([{title: 'test suggestion'}]));
          return new AiAssistanceModel.NodeContext(node);
        },
        action: 'freestyler.elements-floating-button',
      },
      {
        flavor: SDK.NetworkRequest.NetworkRequest,
        createContext: () => {
          return new AiAssistanceModel.RequestContext(sinon.createStubInstance(SDK.NetworkRequest.NetworkRequest));
        },
        action: 'drjones.network-floating-button'
      },
      {
        flavor: TimelineUtils.AIContext.AgentFocus,
        createContext: () => {
          return AiAssistanceModel.PerformanceTraceContext.fromCallTree(
              sinon.createStubInstance(TimelineUtils.AICallTree.AICallTree));
        },
        action: 'drjones.performance-panel-context'
      },
      {
        flavor: TimelineUtils.AIContext.AgentFocus,
        createContext: () => {
          // @ts-expect-error: don't need any data.
          const context = AiAssistanceModel.PerformanceTraceContext.fromInsight(null, null, null);
          sinon.stub(AiAssistanceModel.PerformanceTraceContext.prototype, 'getSuggestions')
              .returns(Promise.resolve([{title: 'test suggestion'}]));
          return context;
        },
        action: 'drjones.performance-insight-context'
      },
      {
        flavor: Workspace.UISourceCode.UISourceCode,
        createContext: () => {
          return new AiAssistanceModel.FileContext(sinon.createStubInstance(Workspace.UISourceCode.UISourceCode));
        },
        action: 'drjones.sources-panel-context',
      }
    ];

    for (const test of tests) {
      it(`should use the selected ${test.flavor.name} context after the widget is shown`, async () => {
        const {panel, view} = await createAiAssistancePanel();
        const context = test.createContext();
        const contextItem = context.getItem();
        if (!contextItem) {
          throw new Error('Context is not available');
        }
        UI.Context.Context.instance().setFlavor(test.flavor, contextItem);
        panel.handleAction(test.action);
        expect((await view.nextInput).selectedContext?.getItem()).equals(contextItem);
      });

      it(`should update the selected ${test.flavor.name} context whenever flavor changes`, async () => {
        const {panel, view} = await createAiAssistancePanel();
        panel.handleAction(test.action);
        assert.isNull((await view.nextInput).selectedContext);
        const context = test.createContext();
        const contextItem = context.getItem();
        if (!contextItem) {
          throw new Error('Context is not available');
        }
        UI.Context.Context.instance().setFlavor(test.flavor, contextItem);
        UI.Context.Context.instance().setFlavor(test.flavor, contextItem);
        expect((await view.nextInput).selectedContext?.getItem()).equals(contextItem);
      });

      it(`should ignore ${test.flavor.name} flavor change after the panel was hidden`, async () => {
        const {view, panel} = await createAiAssistancePanel();
        assert.isNull(view.input.selectedContext);
        const callCount = view.callCount;
        panel.hideWidget();
        const context = test.createContext();
        const contextItem = context.getItem();
        if (!contextItem) {
          throw new Error('Context is not available');
        }
        UI.Context.Context.instance().setFlavor(test.flavor, contextItem);
        sinon.assert.callCount(view, callCount);
      });
    }

    it('should set selected context to null when the change DOMNode flavor is not an ELEMENT_NODE', async () => {
      const {panel, view} = await createAiAssistancePanel();
      panel.handleAction('freestyler.elements-floating-button');
      assert.isNull((await view.nextInput).selectedContext);

      const node = sinon.createStubInstance(SDK.DOMModel.DOMNode, {
        nodeType: Node.COMMENT_NODE,
      });
      UI.Context.Context.instance().setFlavor(SDK.DOMModel.DOMNode, node);
      assert.isNull((await view.nextInput).selectedContext);
    });

    it('should clear the text input when the context changes to null', async () => {
      const chatView = sinon.createStubInstance(AiAssistancePanel.ChatView);
      const {panel, view} = await createAiAssistancePanel({chatView});

      // Firstly, start a conversation and set a context
      const context = AiAssistanceModel.PerformanceTraceContext.fromCallTree(
          sinon.createStubInstance(TimelineUtils.AICallTree.AICallTree));
      UI.Context.Context.instance().setFlavor(TimelineUtils.AIContext.AgentFocus, context.getItem());
      panel.handleAction('drjones.performance-panel-context');
      await view.nextInput;

      // Now clear the context and check we cleared out the text
      UI.Context.Context.instance().setFlavor(TimelineUtils.AIContext.AgentFocus, null);
      sinon.assert.callCount(chatView.clearTextInput, 1);
    });
  });

  describe('toggle search element action', () => {
    let toggleSearchElementAction: UI.ActionRegistration.Action;
    beforeEach(() => {
      toggleSearchElementAction =
          UI.ActionRegistry.ActionRegistry.instance().getAction('elements.toggle-element-search');
      toggleSearchElementAction.setToggled(false);
    });

    it('should set inspectElementToggled when the widget is shown', async () => {
      const {view} = await createAiAssistancePanel();
      toggleSearchElementAction.setToggled(true);
      assert.isTrue((await view.nextInput).inspectElementToggled);
    });

    it('should update inspectElementToggled when the action is toggled', async () => {
      const {view} = await createAiAssistancePanel();
      assert.isFalse(view.input.inspectElementToggled);

      toggleSearchElementAction.setToggled(true);
      assert.isTrue((await view.nextInput).inspectElementToggled);
    });

    it('should not update toggleSearchElementAction when the widget is not shown', async () => {
      toggleSearchElementAction.setToggled(false);

      const {view, panel} = await createAiAssistancePanel();
      const callCount = view.callCount;
      panel.hideWidget();

      toggleSearchElementAction.setToggled(true);

      const uiSourceCode = sinon.createStubInstance(Workspace.UISourceCode.UISourceCode);
      UI.Context.Context.instance().setFlavor(Workspace.UISourceCode.UISourceCode, uiSourceCode);

      sinon.assert.callCount(view, callCount);
    });
  });

  describe('toolbar actions', () => {
    it('should show chrome-ai view on settings click', async () => {
      const stub = sinon.stub(UI.ViewManager.ViewManager.instance(), 'showView');
      const {view} = await createAiAssistancePanel();
      view.input.onSettingsClick();
      sinon.assert.calledWith(stub, 'chrome-ai');
    });

    it('should not show chat and delete history actions when ai assistance enabled setting is disabled', async () => {
      Common.Settings.moduleSetting('ai-assistance-enabled').setDisabled(true);

      const {view} = await createAiAssistancePanel();

      assert.isFalse(view.input.showChatActions);
      assert.isFalse(view.input.showDeleteHistoryAction);
    });

    it('should not show chat and delete history actions when ai assistance setting is marked as false', async () => {
      Common.Settings.moduleSetting('ai-assistance-enabled').set(false);

      const {view} = await createAiAssistancePanel();

      assert.isFalse(view.input.showChatActions);
      assert.isFalse(view.input.showDeleteHistoryAction);
    });

    it('should not show chat and delete history actions when the user is blocked by age', async () => {
      Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
      updateHostConfig({
        aidaAvailability: {
          blockedByAge: true,
        },
      });

      const {view} = await createAiAssistancePanel();

      assert.isFalse(view.input.showChatActions);
      assert.isFalse(view.input.showDeleteHistoryAction);
    });

    it('should not show chat and delete history actions when Aida availability status is SYNC IS PAUSED', async () => {
      Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
      Common.Settings.moduleSetting('ai-assistance-enabled').set(true);

      const {view} =
          await createAiAssistancePanel({aidaAvailability: Host.AidaClient.AidaAccessPreconditions.SYNC_IS_PAUSED});

      assert.isFalse(view.input.showChatActions);
      assert.isFalse(view.input.showDeleteHistoryAction);
    });
  });

  describe('history interactions', () => {
    it('should have empty messages after new chat', async () => {
      const {panel, view} = await createAiAssistancePanel({aidaClient: mockAidaClient([[{explanation: 'test'}]])});

      panel.handleAction('freestyler.elements-floating-button');
      (await view.nextInput).onTextSubmit('test');

      assert.deepEqual((await view.nextInput).messages, [
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'test',
          imageInput: undefined,
        },
        {
          answer: 'test',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps: [],
        },
      ]);

      view.input.onNewChatClick();

      assert.deepEqual((await view.nextInput).messages, []);
    });

    it('should select default agent after new chat', async () => {
      updateHostConfig({
        devToolsFreestyler: {
          enabled: true,
        },
      });
      const {panel, view} = await createAiAssistancePanel({aidaClient: mockAidaClient([[{explanation: 'test'}]])});

      panel.handleAction('freestyler.elements-floating-button');
      await view.nextInput;

      UI.Context.Context.instance().setFlavor(
          Elements.ElementsPanel.ElementsPanel, sinon.createStubInstance(Elements.ElementsPanel.ElementsPanel));

      view.input.onTextSubmit('test');

      assert.deepEqual((await view.nextInput).messages, [
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'test',
          imageInput: undefined,
        },
        {
          answer: 'test',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps: [],
        },
      ]);
      view.input.onNewChatClick();

      assert.deepEqual((await view.nextInput).messages, []);
      assert.deepEqual(view.input.conversationType, AiAssistanceModel.ConversationType.STYLING);
    });

    it('should select the performance insights agent if it is enabled and the user has expanded an insight',
       async () => {
         updateHostConfig({
           devToolsAiAssistancePerformanceAgent: {
             enabled: true,
             insightsEnabled: true,
           },
         });
         const {panel, view} = await createAiAssistancePanel({aidaClient: mockAidaClient([[{explanation: 'test'}]])});

         panel.handleAction('freestyler.elements-floating-button');

         (await view.nextInput).onTextSubmit('test');
         await view.nextInput;

         UI.Context.Context.instance().setFlavor(
             Timeline.TimelinePanel.TimelinePanel, sinon.createStubInstance(Timeline.TimelinePanel.TimelinePanel));

         UI.Context.Context.instance().setFlavor(
             Timeline.TimelinePanel.SelectedInsight,
             new Timeline.TimelinePanel.SelectedInsight({} as unknown as TimelineComponents.Sidebar.ActiveInsight));

         assert.deepEqual(view.input.messages, [
           {
             entity: AiAssistancePanel.ChatMessageEntity.USER,
             text: 'test',
             imageInput: undefined,
           },
           {
             answer: 'test',
             entity: AiAssistancePanel.ChatMessageEntity.MODEL,
             rpcId: undefined,
             suggestions: undefined,
             steps: [],
           },
         ]);
         view.input.onNewChatClick();

         assert.deepEqual((await view.nextInput).messages, []);
         assert.deepEqual(view.input.conversationType, AiAssistanceModel.ConversationType.PERFORMANCE_INSIGHT);
       });

    it('should select the Dr Jones performance agent if insights are not enabled', async () => {
      updateHostConfig({
        devToolsAiAssistancePerformanceAgent: {
          enabled: true,
          insightsEnabled: false,
        },
      });
      const {panel, view} = await createAiAssistancePanel({aidaClient: mockAidaClient([[{explanation: 'test'}]])});

      panel.handleAction('freestyler.elements-floating-button');
      (await view.nextInput).onTextSubmit('test');
      await view.nextInput;

      UI.Context.Context.instance().setFlavor(
          Timeline.TimelinePanel.TimelinePanel, sinon.createStubInstance(Timeline.TimelinePanel.TimelinePanel));

      assert.deepEqual(view.input.messages, [
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'test',
          imageInput: undefined,
        },
        {
          answer: 'test',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps: [],
        },
      ]);
      view.input.onNewChatClick();

      assert.deepEqual((await view.nextInput).messages, []);
      assert.deepEqual(view.input.conversationType, AiAssistanceModel.ConversationType.PERFORMANCE);
    });

    it('should switch agents and restore history', async () => {
      updateHostConfig({
        devToolsFreestyler: {
          enabled: true,
          multimodal: true,
        },
      });
      const {panel, view} = await createAiAssistancePanel(
          {aidaClient: mockAidaClient([[{explanation: 'test'}], [{explanation: 'test2'}]])});
      panel.handleAction('freestyler.elements-floating-button');
      const imageInput = {inlineData: {data: 'imageinputbytes', mimeType: 'image/jpeg'}};
      (await view.nextInput)
          .onTextSubmit('User question to Freestyler?', imageInput, AiAssistanceModel.MultimodalInputType.SCREENSHOT);
      assert.deepEqual((await view.nextInput).messages, [
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'User question to Freestyler?',
          imageInput,
        },
        {
          answer: 'test',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps: [],
        },
      ]);

      panel.handleAction('drjones.network-floating-button');
      (await view.nextInput).onTextSubmit('User question to DrJones?');
      assert.deepEqual((await view.nextInput).messages, [
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'User question to DrJones?',
          imageInput: undefined,
        },
        {
          answer: 'test2',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps: [],
        },
      ]);

      const {contextMenu, id} = openHistoryContextMenu(view.input, 'User question to Freestyler?');
      assert.isDefined(id);
      contextMenu.invokeHandler(id);
      assert.isTrue((await view.nextInput).isReadOnly);
      assert.deepEqual(view.input.messages, [
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'User question to Freestyler?',
          imageInput,
        },
        {
          answer: 'test',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps: [],
        },
      ]);
    });

    it('should not save partial responses to conversation history', async () => {
      updateHostConfig({
        devToolsFreestyler: {
          enabled: true,
        },
      });
      const addHistoryItemStub = sinon.stub(AiAssistanceModel.Conversation.prototype, 'addHistoryItem');
      UI.Context.Context.instance().setFlavor(
          Elements.ElementsPanel.ElementsPanel, sinon.createStubInstance(Elements.ElementsPanel.ElementsPanel));
      const {view} = await createAiAssistancePanel({
        aidaClient: mockAidaClient([[
          {explanation: 'ANSWER: partially started'}, {explanation: 'ANSWER: partially started and now it\'s finished'}
        ]])
      });
      // Trigger running the conversation (observe that there are two answers: one partial, one complete)
      view.input.onTextSubmit('User question to Freestyler?');
      await view.nextInput;

      sinon.assert.calledWith(
          addHistoryItemStub, sinon.match({type: 'answer', text: 'partially started and now it\'s finished'}));
      sinon.assert.neverCalledWith(addHistoryItemStub, sinon.match({type: 'answer', text: 'partially started'}));
    });

    it('should switch agents and restore history and allow a single delete', async () => {
      updateHostConfig({
        devToolsFreestyler: {
          enabled: true,
        },
      });
      const aiHistoryStorage = AiAssistanceModel.AiHistoryStorage.instance({forceNew: true});
      const deleteHistoryEntryStub = sinon.stub(aiHistoryStorage, 'deleteHistoryEntry');
      const {panel, view} = await createAiAssistancePanel(
          {
            aidaClient: mockAidaClient(
                [
                  [{explanation: 'test'}],
                  [{explanation: 'test2'}],
                ],
                ),
          },
      );
      panel.handleAction('freestyler.elements-floating-button');
      (await view.nextInput).onTextSubmit('User question to Freestyler?');
      await view.nextInput;

      panel.handleAction('drjones.network-floating-button');
      (await view.nextInput).onTextSubmit('User question to DrJones?');

      const {contextMenu, id} = openHistoryContextMenu((await view.nextInput), 'User question to Freestyler?');
      assert.isDefined(id);
      contextMenu.invokeHandler(id);
      await view.nextInput;

      view.input.onDeleteClick();

      assert.deepEqual((await view.nextInput).messages, []);
      sinon.assert.callCount(deleteHistoryEntryStub, 1);
      assert.isString(deleteHistoryEntryStub.lastCall.args[0]);

      const menuAfterDelete = openHistoryContextMenu(view.input, 'User question to Freestyler?');
      assert.isUndefined(menuAfterDelete.id);
    });

    it('should clear the list of previous conversations when all history is deleted', async () => {
      const {panel, view} = await createAiAssistancePanel({aidaClient: mockAidaClient([[{explanation: 'test'}]])});
      panel.handleAction('freestyler.elements-floating-button');
      (await view.nextInput).onTextSubmit('test');
      await view.nextInput;

      let {contextMenu} = openHistoryContextMenu(view.input, 'test');
      assert.isDefined(findMenuItemWithLabel(contextMenu.defaultSection(), 'test'));
      contextMenu.discard();

      await AiAssistanceModel.AiHistoryStorage.instance().deleteAll();

      const newViewInput = await view.nextInput;
      ({contextMenu} = openHistoryContextMenu(newViewInput, 'test'));

      const defaultSectionItems = contextMenu.defaultSection().items;
      assert.lengthOf(defaultSectionItems, 1, 'Default section should have one item');

      const placeholderItem = defaultSectionItems[0];
      assert.strictEqual(placeholderItem.buildDescriptor().label, 'No past conversations');
      assert.isFalse(placeholderItem.isEnabled(), 'Placeholder item should be disabled');
    });
  });

  describe('empty state', () => {
    it('should have empty state after clear chat', async () => {
      const {panel, view} = await createAiAssistancePanel({
        aidaClient: mockAidaClient([[{explanation: 'test'}]]),
      });

      panel.handleAction('freestyler.elements-floating-button');
      (await view.nextInput).onTextSubmit('test');
      assert.deepEqual((await view.nextInput).messages, [
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'test',
          imageInput: undefined,
        },
        {
          answer: 'test',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps: [],
        },
      ]);

      view.input.onDeleteClick();
      assert.deepEqual((await view.nextInput).messages, []);
      assert.isUndefined(view.input.conversationType);
    });

    it('should select default agent based on open panel after clearing the chat', async () => {
      updateHostConfig({
        devToolsFreestyler: {
          enabled: true,
        },
      });
      UI.Context.Context.instance().setFlavor(
          Elements.ElementsPanel.ElementsPanel, sinon.createStubInstance(Elements.ElementsPanel.ElementsPanel));
      const {panel, view} = await createAiAssistancePanel({aidaClient: mockAidaClient([[{explanation: 'test'}]])});
      panel.handleAction('freestyler.elements-floating-button');
      (await view.nextInput).onTextSubmit('test');
      assert.deepEqual((await view.nextInput).messages, [
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'test',
          imageInput: undefined,
        },
        {
          answer: 'test',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps: [],
        },
      ]);
      view.input.onDeleteClick();
      assert.deepEqual((await view.nextInput).messages, []);
      assert.deepEqual(view.input.conversationType, AiAssistanceModel.ConversationType.STYLING);
    });

    it('should have empty state after clear chat history', async () => {
      const {panel, view} = await createAiAssistancePanel(
          {aidaClient: mockAidaClient([[{explanation: 'test'}], [{explanation: 'test2'}]])});

      panel.handleAction('freestyler.elements-floating-button');
      (await view.nextInput).onTextSubmit('User question to Freestyler?');
      assert.deepEqual((await view.nextInput).messages, [
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'User question to Freestyler?',
          imageInput: undefined,
        },
        {
          answer: 'test',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps: [],
        },
      ]);

      panel.handleAction('drjones.network-floating-button');
      (await view.nextInput).onTextSubmit('User question to DrJones?');
      assert.deepEqual((await view.nextInput).messages, [
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'User question to DrJones?',
          imageInput: undefined,
        },
        {
          answer: 'test2',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps: [],
        },
      ]);

      let {contextMenu} = openHistoryContextMenu(view.input, 'User question to Freestyler?');
      const clearAll = findMenuItemWithLabel(contextMenu.footerSection(), 'Clear local chats')!;
      assert.isDefined(clearAll);
      contextMenu.invokeHandler(clearAll.id());
      assert.deepEqual((await view.nextInput).messages, []);
      assert.isUndefined(view.input.conversationType);
      contextMenu.discard();

      contextMenu = openHistoryContextMenu(view.input, 'User question to Freestyler?').contextMenu;
      const menuItem = findMenuItemWithLabel(contextMenu.defaultSection(), 'No past conversations');
      assert(menuItem);
    });
  });

  describe('cross-origin', () => {
    beforeEach(async () => {
      createTarget();
      await createNetworkPanelForMockConnection();
    });

    afterEach(async () => {
      Network.NetworkPanel.NetworkPanel.instance().detach();
    });

    it('blocks input on cross origin requests', async () => {
      const networkRequest = createNetworkRequest({
        url: urlString`https://a.test`,
      });
      UI.Context.Context.instance().setFlavor(SDK.NetworkRequest.NetworkRequest, networkRequest);

      const {panel, view} = await createAiAssistancePanel({
        aidaClient: mockAidaClient([
          [{explanation: 'test'}],
        ])
      });
      panel.handleAction('drjones.network-floating-button');

      assert.isFalse((await view.nextInput).blockedByCrossOrigin);
      assert.strictEqual(view.input.selectedContext?.getItem(), networkRequest);

      // Send a query for https://a.test.
      panel.handleAction('drjones.network-floating-button');
      view.input.onTextSubmit('test');
      await view.nextInput;

      // Change context to https://b.test.
      const networkRequest2 = createNetworkRequest({
        url: urlString`https://b.test`,
      });
      UI.Context.Context.instance().setFlavor(SDK.NetworkRequest.NetworkRequest, networkRequest2);

      panel.handleAction('drjones.network-floating-button');

      assert.isTrue((await view.nextInput).blockedByCrossOrigin);
      assert.strictEqual(view.input.selectedContext?.getItem(), networkRequest2);
    });

    it('should be able to continue same-origin requests', async () => {
      updateHostConfig({
        devToolsFreestyler: {
          enabled: true,
        },
      });

      const {panel, view} = await createAiAssistancePanel({
        aidaClient: mockAidaClient([[{explanation: 'test'}], [{explanation: 'test2'}]]),
      });
      UI.Context.Context.instance().setFlavor(
          Elements.ElementsPanel.ElementsPanel, sinon.createStubInstance(Elements.ElementsPanel.ElementsPanel));

      panel.handleAction('freestyler.elements-floating-button');
      view.input.onTextSubmit('test');

      assert.deepEqual((await view.nextInput).messages, [
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'test',
          imageInput: undefined,
        },
        {
          answer: 'test',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps: [],
        },
      ]);

      UI.Context.Context.instance().setFlavor(
          Elements.ElementsPanel.ElementsPanel, sinon.createStubInstance(Elements.ElementsPanel.ElementsPanel));

      panel.handleAction('freestyler.elements-floating-button');
      view.input.onTextSubmit('test2');

      assert.isFalse((await view.nextInput).isReadOnly);
      assert.deepEqual(view.input.messages, [
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'test',
          imageInput: undefined,
        },
        {
          answer: 'test',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps: [],
        },
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'test2',
          imageInput: undefined,
        },
        {
          answer: 'test2',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps: [],
        },
      ]);
    });

    it('blocks input on cross origin request, when the selected context is changed while the panel was hidden',
       async () => {
         const networkRequest = createNetworkRequest({
           url: urlString`https://a.test`,
         });
         UI.Context.Context.instance().setFlavor(SDK.NetworkRequest.NetworkRequest, networkRequest);

         const {panel, view} = await createAiAssistancePanel({
           aidaClient: mockAidaClient([
             [{explanation: 'test'}],
           ])
         });
         panel.handleAction('drjones.network-floating-button');

         assert.isFalse((await view.nextInput).blockedByCrossOrigin);
         assert.strictEqual(view.input.selectedContext?.getItem(), networkRequest);

         // Send a query for https://a.test.
         panel.handleAction('drjones.network-floating-button');
         view.input.onTextSubmit('test');
         await view.nextInput;

         // Hide the panel
         panel.hideWidget();

         // Change context to https://b.test.
         const networkRequest2 = createNetworkRequest({
           url: urlString`https://b.test`,
         });
         UI.Context.Context.instance().setFlavor(SDK.NetworkRequest.NetworkRequest, networkRequest2);

         // Show the widget again
         panel.showWidget();

         assert.isTrue((await view.nextInput).blockedByCrossOrigin);
         assert.strictEqual(view.input.selectedContext?.getItem(), networkRequest2);
       });
  });

  describe('auto agent selection for panels', () => {
    const tests: Array<{
      panel: Platform.Constructor.Constructor<UI.Panel.Panel>,
      expectedConversationType: AiAssistanceModel.ConversationType,
      featureFlagName: string,
    }> =
        [
          {
            panel: Elements.ElementsPanel.ElementsPanel,
            expectedConversationType: AiAssistanceModel.ConversationType.STYLING,
            featureFlagName: 'devToolsFreestyler',
          },
          {
            panel: Network.NetworkPanel.NetworkPanel,
            expectedConversationType: AiAssistanceModel.ConversationType.NETWORK,
            featureFlagName: 'devToolsAiAssistanceNetworkAgent',
          },
          {
            panel: Sources.SourcesPanel.SourcesPanel,
            expectedConversationType: AiAssistanceModel.ConversationType.FILE,
            featureFlagName: 'devToolsAiAssistanceFileAgent',
          },
          {
            panel: Timeline.TimelinePanel.TimelinePanel,
            expectedConversationType: AiAssistanceModel.ConversationType.PERFORMANCE,
            featureFlagName: 'devToolsAiAssistancePerformanceAgent',
          }
        ];

    for (const test of tests) {
      it(`should select ${test.expectedConversationType} conversation when the panel ${test.panel.name} is opened`,
          async () => {
            updateHostConfig({
              [test.featureFlagName]: {
                enabled: true,
              },
            });
            UI.Context.Context.instance().setFlavor(test.panel, sinon.createStubInstance(test.panel));

            const {view} = await createAiAssistancePanel({
              aidaClient: mockAidaClient([[{explanation: 'test'}]]),
            });

            assert.strictEqual(view.input.conversationType, test.expectedConversationType);
          });

      it(`should reset the conversation when ${test.panel.name} is closed and no other panels are open`, async () => {
        updateHostConfig({
          [test.featureFlagName]: {
            enabled: true,
          },
        });

        UI.Context.Context.instance().setFlavor(test.panel, sinon.createStubInstance(test.panel));

        const {view} = await createAiAssistancePanel();

        assert.strictEqual(view.input.conversationType, test.expectedConversationType);

        UI.Context.Context.instance().setFlavor(test.panel, null);
        assert.isUndefined((await view.nextInput).conversationType);
      });

      it(`should render no conversation state if the ${
             test.panel.name} panel is changed and the feature is not enabled`,
          async () => {
            updateHostConfig({
              [test.featureFlagName]: {
                enabled: false,
              },
            });
            UI.Context.Context.instance().setFlavor(test.panel, sinon.createStubInstance(test.panel));
            const {view} = await createAiAssistancePanel();

            assert.isUndefined(view.input.conversationType);
          });
    }

    describe('Performance Insight agent', () => {
      it('should select the PERFORMANCE_INSIGHT agent when the performance panel is open and insights are enabled and an insight is expanded',
         async () => {
           updateHostConfig({
             devToolsAiAssistancePerformanceAgent: {
               enabled: true,
               insightsEnabled: true,
             },
           });
           UI.Context.Context.instance().setFlavor(
               Timeline.TimelinePanel.TimelinePanel, sinon.createStubInstance(Timeline.TimelinePanel.TimelinePanel));
           UI.Context.Context.instance().setFlavor(
               Timeline.TimelinePanel.SelectedInsight,
               new Timeline.TimelinePanel.SelectedInsight({} as unknown as TimelineComponents.Sidebar.ActiveInsight));
           const {view} = await createAiAssistancePanel();

           assert.strictEqual(view.input.conversationType, AiAssistanceModel.ConversationType.PERFORMANCE_INSIGHT);
         });

      it('should select the PERFORMANCE agent when the performance panel is open and insights are enabled but the user has not selected an insight',
         async () => {
           updateHostConfig({
             devToolsAiAssistancePerformanceAgent: {
               enabled: true,
               insightsEnabled: true,
             },
           });
           UI.Context.Context.instance().setFlavor(
               Timeline.TimelinePanel.TimelinePanel, sinon.createStubInstance(Timeline.TimelinePanel.TimelinePanel));
           UI.Context.Context.instance().setFlavor(Timeline.TimelinePanel.SelectedInsight, null);

           const {view} = await createAiAssistancePanel();
           assert.strictEqual(view.input.conversationType, AiAssistanceModel.ConversationType.PERFORMANCE);
         });
    });
  });

  it('erases previous partial response on blocked error', async () => {
    const {panel, view} = await createAiAssistancePanel({
      aidaClient: mockAidaClient([[{
        explanation: 'This is the first part of the answer.',
        metadata: {attributionMetadata: {attributionAction: Host.AidaClient.RecitationAction.BLOCK, citations: []}}
      }]]),
    });
    panel.handleAction('freestyler.elements-floating-button');
    view.input.onTextSubmit('test');

    assert.deepEqual((await view.nextInput).messages, [
      {
        entity: AiAssistancePanel.ChatMessageEntity.USER,
        text: 'test',
        imageInput: undefined,
      },
      {
        answer: undefined,
        entity: AiAssistancePanel.ChatMessageEntity.MODEL,
        rpcId: undefined,
        error: AiAssistanceModel.ErrorType.BLOCK,
        steps: [],
      },
    ]);
  });

  describe('chat input', () => {
    describe('disabled state', () => {
      it('should be disabled when ai assistance enabled setting is disabled and show followTheSteps placeholder',
         async () => {
           Common.Settings.moduleSetting('ai-assistance-enabled').setDisabled(true);

           const {view} = await createAiAssistancePanel();

           assert.isTrue(view.input.isTextInputDisabled);
           assert.strictEqual(view.input.inputPlaceholder, 'Follow the steps above to ask a question');
           assert.strictEqual(
               view.input.disclaimerText, 'This is an experimental AI feature and won\'t always get it right.');
         });

      it('should be disabled when ai assistance setting is marked as false and show followTheSteps placeholder',
         async () => {
           Common.Settings.moduleSetting('ai-assistance-enabled').set(false);

           const {view} = await createAiAssistancePanel();

           assert.isTrue(view.input.isTextInputDisabled);
           assert.strictEqual(view.input.inputPlaceholder, 'Follow the steps above to ask a question');
           assert.strictEqual(
               view.input.disclaimerText, 'This is an experimental AI feature and won\'t always get it right.');
         });

      it('should be disabled when the user is blocked by age and show followTheSteps placeholder', async () => {
        Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
        updateHostConfig({
          aidaAvailability: {
            blockedByAge: true,
          },
        });

        const {view} = await createAiAssistancePanel();

        assert.isTrue(view.input.isTextInputDisabled);
        assert.strictEqual(view.input.inputPlaceholder, 'Follow the steps above to ask a question');
        assert.strictEqual(
            view.input.disclaimerText, 'This is an experimental AI feature and won\'t always get it right.');
      });

      it('should be disabled when Aida availability status is not AVAILABLE', async () => {
        Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
        const {view} =
            await createAiAssistancePanel({aidaAvailability: Host.AidaClient.AidaAccessPreconditions.NO_INTERNET});

        assert.isTrue(view.input.isTextInputDisabled);
      });

      it('should be disabled when the next message is blocked by cross origin and show crossOriginError placeholder',
         async () => {
           Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
           const networkRequest = createNetworkRequest({
             url: urlString`https://a.test`,
           });
           UI.Context.Context.instance().setFlavor(SDK.NetworkRequest.NetworkRequest, networkRequest);

           const {panel, view} = await createAiAssistancePanel({
             aidaClient: mockAidaClient([
               [{explanation: 'test'}],
             ]),
           });
           panel.handleAction('drjones.network-floating-button');

           assert.isFalse((await view.nextInput).blockedByCrossOrigin);
           assert.strictEqual(view.input.selectedContext?.getItem(), networkRequest);

           // Send a query for https://a.test.
           panel.handleAction('drjones.network-floating-button');
           view.input.onTextSubmit('test');
           await view.nextInput;

           // Change context to https://b.test.
           const networkRequest2 = createNetworkRequest({
             url: urlString`https://b.test`,
           });
           UI.Context.Context.instance().setFlavor(SDK.NetworkRequest.NetworkRequest, networkRequest2);

           panel.handleAction('drjones.network-floating-button');

           assert.isTrue((await view.nextInput).blockedByCrossOrigin);
           assert.isTrue(view.input.isTextInputDisabled);
           assert.strictEqual(view.input.inputPlaceholder, 'To talk about data from another origin, start a new chat');
         });

      it('should be disabled when there is no selected context and show inputPlaceholderForStylingNoContext',
         async () => {
           updateHostConfig({
             devToolsFreestyler: {
               enabled: true,
             },
           });
           Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
           const {panel, view} =
               await createAiAssistancePanel({aidaAvailability: Host.AidaClient.AidaAccessPreconditions.AVAILABLE});
           panel.handleAction('freestyler.elements-floating-button');

           assert.isNull((await view.nextInput).selectedContext);
           assert.isTrue(view.input.isTextInputDisabled);
           assert.strictEqual(view.input.inputPlaceholder, 'Select an element to ask a question');
         });

      it('shows the right placeholder for the performance agent when the user has no trace', async () => {
        updateHostConfig({
          devToolsAiAssistancePerformanceAgent: {
            enabled: true,
          },
        });
        UI.Context.Context.instance().setFlavor(
            Timeline.TimelinePanel.TimelinePanel, sinon.createStubInstance(Timeline.TimelinePanel.TimelinePanel));
        Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
        const {panel, view} =
            await createAiAssistancePanel({aidaAvailability: Host.AidaClient.AidaAccessPreconditions.AVAILABLE});
        panel.handleAction('drjones.performance-panel-context');

        assert.isNull((await view.nextInput).selectedContext);
        assert.isTrue(view.input.isTextInputDisabled);
        assert.strictEqual(
            view.input.inputPlaceholder, 'Record a performance trace and select an item to ask a question');
      });

      it('shows the right placeholder for the performance agent when the user has a trace but no selected item',
         async () => {
           updateHostConfig({
             devToolsAiAssistancePerformanceAgent: {
               enabled: true,
             },
           });

           const timelinePanel = sinon.createStubInstance(Timeline.TimelinePanel.TimelinePanel);
           timelinePanel.hasActiveTrace.callsFake(() => true);
           UI.Context.Context.instance().setFlavor(Timeline.TimelinePanel.TimelinePanel, timelinePanel);
           Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
           const {panel, view} =
               await createAiAssistancePanel({aidaAvailability: Host.AidaClient.AidaAccessPreconditions.AVAILABLE});
           panel.handleAction('drjones.performance-panel-context');

           assert.isNull((await view.nextInput).selectedContext);
           assert.isTrue(view.input.isTextInputDisabled);
           assert.strictEqual(view.input.inputPlaceholder, 'Select an item to ask a question');
         });

      it('shows the right placeholder for the performance agent when the user has a trace and a selected item',
         async () => {
           updateHostConfig({
             devToolsAiAssistancePerformanceAgent: {
               enabled: true,
             },
           });

           const timelinePanel = sinon.createStubInstance(Timeline.TimelinePanel.TimelinePanel);
           timelinePanel.hasActiveTrace.callsFake(() => true);
           UI.Context.Context.instance().setFlavor(Timeline.TimelinePanel.TimelinePanel, timelinePanel);

           const fakeCallTree = sinon.createStubInstance(TimelineUtils.AICallTree.AICallTree);
           const focus = TimelineUtils.AIContext.AgentFocus.fromCallTree(fakeCallTree);
           UI.Context.Context.instance().setFlavor(TimelineUtils.AIContext.AgentFocus, focus);

           Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
           const {panel, view} =
               await createAiAssistancePanel({aidaAvailability: Host.AidaClient.AidaAccessPreconditions.AVAILABLE});
           panel.handleAction('drjones.performance-panel-context');

           assert.strictEqual(view.input.inputPlaceholder, 'Ask a question about the selected item and its call tree');
           assert.isFalse(view.input.isTextInputDisabled);
         });
    });

    it('should disable the send button when the input is empty', async () => {
      Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
      updateHostConfig({
        devToolsFreestyler: {
          enabled: true,
        },
      });

      UI.Context.Context.instance().setFlavor(
          Elements.ElementsPanel.ElementsPanel, sinon.createStubInstance(Elements.ElementsPanel.ElementsPanel));
      const {panel, view} =
          await createAiAssistancePanel({aidaAvailability: Host.AidaClient.AidaAccessPreconditions.AVAILABLE});

      panel.handleAction('freestyler.elements-floating-button');
      assert.isTrue((await view.nextInput).isTextInputEmpty);

      view.input.onTextInputChange('test');
      assert.isFalse((await view.nextInput).isTextInputEmpty);

      view.input.onTextInputChange('');
      assert.isTrue((await view.nextInput).isTextInputEmpty);

      view.input.onTextInputChange('test');
      assert.isFalse((await view.nextInput).isTextInputEmpty);

      view.input.onTextSubmit('test');
      assert.isTrue((await view.nextInput).isTextInputEmpty);
    });
  });

  describe('multimodal input', () => {
    let target: SDK.Target.Target;
    beforeEach(() => {
      target = createTarget();
    });

    function mockScreenshotModel() {
      const screenCaptureModel = target.model(SDK.ScreenCaptureModel.ScreenCaptureModel);
      assert.exists(screenCaptureModel);
      return {
        captureScreenshotStub:
            sinon.stub(screenCaptureModel, 'captureScreenshot').returns(Promise.resolve('imageInput')),
      };
    }

    it('multimodal related functions unavailable when multimodal is disabled', async () => {
      updateHostConfig({
        devToolsFreestyler: {
          enabled: true,
          multimodal: false,
        },
      });
      UI.Context.Context.instance().setFlavor(
          Elements.ElementsPanel.ElementsPanel, sinon.createStubInstance(Elements.ElementsPanel.ElementsPanel));
      const {view} = await createAiAssistancePanel();

      assert.isFalse(view.input.multimodalInputEnabled);
      assert.isFalse(view.input.uploadImageInputEnabled);
      assert.notExists(view.input.onTakeScreenshot);
      assert.notExists(view.input.onRemoveImageInput);
      assert.notExists(view.input.onLoadImage);
      assert.notExists(view.input.imageInput);
    });

    it('upload input function unavailable when multimodalUploadInput is disabled', async () => {
      updateHostConfig({
        devToolsFreestyler: {
          enabled: true,
          multimodal: true,
          multimodalUploadInput: false,
        },
      });
      UI.Context.Context.instance().setFlavor(
          Elements.ElementsPanel.ElementsPanel, sinon.createStubInstance(Elements.ElementsPanel.ElementsPanel));
      const {view} = await createAiAssistancePanel();

      assert.isTrue(view.input.multimodalInputEnabled);
      assert.isFalse(view.input.uploadImageInputEnabled);
      assert.exists(view.input.onTakeScreenshot);
      assert.exists(view.input.onRemoveImageInput);
      assert.notExists(view.input.onLoadImage);
    });

    it('adds screenshot as an image input and then removes it', async () => {
      const {captureScreenshotStub} = mockScreenshotModel();
      updateHostConfig({
        devToolsFreestyler: {
          enabled: true,
          multimodal: true,
        },
      });
      UI.Context.Context.instance().setFlavor(
          Elements.ElementsPanel.ElementsPanel, sinon.createStubInstance(Elements.ElementsPanel.ElementsPanel));
      const {view} = await createAiAssistancePanel();

      assert.isTrue(view.input.multimodalInputEnabled);

      view.input.onTakeScreenshot?.();

      assert.deepEqual((await view.nextInput).imageInput, {
        isLoading: false,
        data: 'imageInput',
        mimeType: 'image/jpeg',
        inputType: AiAssistanceModel.MultimodalInputType.SCREENSHOT
      });
      expect(captureScreenshotStub.calledOnce);

      view.input.onRemoveImageInput?.();
      assert.notExists((await view.nextInput).imageInput);
    });

    it('uploads an image as an input and then removes it', async () => {
      updateHostConfig({
        devToolsFreestyler: {
          enabled: true,
          multimodal: true,
          multimodalUploadInput: true,
        },
      });
      UI.Context.Context.instance().setFlavor(
          Elements.ElementsPanel.ElementsPanel, sinon.createStubInstance(Elements.ElementsPanel.ElementsPanel));
      const {view} = await createAiAssistancePanel();
      const blob = new Blob(['imageInput'], {type: 'image/jpeg'});

      assert.isTrue(view.input.multimodalInputEnabled);
      assert.isTrue(view.input.uploadImageInputEnabled);

      await view.input.onLoadImage?.(new File([blob], 'image.jpeg', {type: 'image/jpeg'}));

      assert.deepEqual((await view.nextInput).imageInput, {
        isLoading: false,
        data: btoa('imageInput'),
        mimeType: 'image/jpeg',
        inputType: AiAssistanceModel.MultimodalInputType.UPLOADED_IMAGE
      });

      view.input.onRemoveImageInput?.();
      assert.notExists((await view.nextInput).imageInput);
    });

    it('sends image as input', async () => {
      updateHostConfig({
        devToolsFreestyler: {
          enabled: true,
          multimodal: true,
        },
      });
      UI.Context.Context.instance().setFlavor(
          Elements.ElementsPanel.ElementsPanel, sinon.createStubInstance(Elements.ElementsPanel.ElementsPanel));
      const {view} = await createAiAssistancePanel({aidaClient: mockAidaClient([[{explanation: 'test'}]])});

      assert.isTrue(view.input.multimodalInputEnabled);

      view.input.onTextSubmit(
          'test', {inlineData: {data: 'imageInput', mimeType: 'image/jpeg'}},
          AiAssistanceModel.MultimodalInputType.SCREENSHOT);

      assert.deepEqual((await view.nextInput).messages, [
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'test',
          imageInput: {inlineData: {data: 'imageInput', mimeType: 'image/jpeg'}}
        },
        {
          answer: 'test',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps: [],
        },
      ]);
    });

    it('image input should be removed when primary target changed', async () => {
      mockScreenshotModel();
      updateHostConfig({
        devToolsFreestyler: {
          enabled: true,
          multimodal: true,
        },
      });
      UI.Context.Context.instance().setFlavor(
          Elements.ElementsPanel.ElementsPanel, sinon.createStubInstance(Elements.ElementsPanel.ElementsPanel));
      const {view} = await createAiAssistancePanel();

      assert.isUndefined(view.input.imageInput);
      view.input.onTakeScreenshot?.();
      assert.exists((await view.nextInput).imageInput);

      const resourceTreeModel = target.model(SDK.ResourceTreeModel.ResourceTreeModel);
      resourceTreeModel?.dispatchEventToListeners(SDK.ResourceTreeModel.Events.PrimaryPageChanged, {
        frame: sinon.createStubInstance(SDK.ResourceTreeModel.ResourceTreeFrame),
        type: SDK.ResourceTreeModel.PrimaryPageChangeType.NAVIGATION
      });
      assert.isUndefined((await view.nextInput).imageInput);
    });
  });

  describe('a11y announcements', () => {
    let liveAnnouncerStatusStub: sinon.SinonStub;
    beforeEach(() => {
      liveAnnouncerStatusStub = sinon.stub(UI.ARIAUtils.LiveAnnouncer, 'status').returns();
    });

    it('should announce the context title from the agent as status', async () => {
      const stubbedResponses: AsyncGenerator<AiAssistanceModel.ResponseData> = (async function*() {
        yield {
          type: AiAssistanceModel.ResponseType.CONTEXT,
          title: 'context-title',
          details: [{title: 'mock', text: 'mock'}]
        };
      })();
      sinon.stub(AiAssistanceModel.StylingAgent.prototype, 'run').returns(stubbedResponses);
      const {panel, view} = await createAiAssistancePanel();

      panel.handleAction('freestyler.elements-floating-button');
      (await view.nextInput).onTextSubmit('test');
      await view.nextInput;

      assert.isTrue(
          liveAnnouncerStatusStub.calledWith('context-title'),
          'Expected live announcer status to be called with the context title');
    });

    it('should announce answer loading when answer starts streaming as status', async () => {
      const stubbedResponses: AsyncGenerator<AiAssistanceModel.ResponseData> = (async function*() {
        yield {
          type: AiAssistanceModel.ResponseType.ANSWER,
          text: 'streaming ans',
          complete: false,
        };

        yield {
          type: AiAssistanceModel.ResponseType.ANSWER,
          text: 'streaming answer is not compl',
          complete: false,
        };
      })();
      sinon.stub(AiAssistanceModel.StylingAgent.prototype, 'run').returns(stubbedResponses);
      const {panel, view} = await createAiAssistancePanel();

      panel.handleAction('freestyler.elements-floating-button');
      (await view.nextInput).onTextSubmit('test');
      await view.nextInput;

      assert.isTrue(liveAnnouncerStatusStub.calledOnce, 'Expected live announcer status to be called only once');
      assert.isTrue(
          liveAnnouncerStatusStub.calledWith('Answer loading'),
          'Expected live announcer status to be called with the text "Answer loading"');
    });

    it('should announce answer ready when answer completes streaming', async () => {
      const stubbedResponses: AsyncGenerator<AiAssistanceModel.ResponseData> = (async function*() {
        yield {
          type: AiAssistanceModel.ResponseType.ANSWER,
          text: 'streaming answer is not completed before but now it is complete',
          complete: true,
        };
      })();
      sinon.stub(AiAssistanceModel.StylingAgent.prototype, 'run').returns(stubbedResponses);
      const {panel, view} = await createAiAssistancePanel();

      panel.handleAction('freestyler.elements-floating-button');
      (await view.nextInput).onTextSubmit('test');
      await view.nextInput;

      assert.isTrue(
          liveAnnouncerStatusStub.calledWith('Answer ready'),
          'Expected live announcer status to be called with the text "Answer loading"');
    });
  });

  describe('handleExternalRequest', () => {
    const explanation = 'I need more information';
    let performSearchStub: sinon.SinonStub;

    beforeEach(() => {
      Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
      updateHostConfig({
        devToolsFreestyler: {
          enabled: true,

        },
        devToolsAiAssistanceNetworkAgent: {
          enabled: true,
        }
      });

      const target = createTarget();
      performSearchStub = sinon.stub(target.domAgent(), 'invoke_performSearch')
                              .resolves({searchId: 'uniqueId', resultCount: 0, getError: () => undefined});
    });

    describe('can be blocked', () => {
      it('by a setting', async () => {
        Common.Settings.moduleSetting('ai-assistance-enabled').set(false);
        const {panel} = await createAiAssistancePanel({
          aidaClient: mockAidaClient([[{explanation}]]),
        });
        const generator = await panel.handleExternalRequest({
          prompt: 'Please help me debug this problem',
          conversationType: AiAssistanceModel.ConversationType.STYLING
        });
        const response = await generator.next();
        assert.strictEqual(response.value.type, 'error');
        assert.strictEqual(
            response.value.message,
            'For AI features to be available, you need to enable AI assistance in DevTools settings.');
      });

      it('by feature availability', async () => {
        const {panel} = await createAiAssistancePanel({
          aidaClient: mockAidaClient([[{explanation}]]),
          aidaAvailability: Host.AidaClient.AidaAccessPreconditions.SYNC_IS_PAUSED,
        });
        const generator = await panel.handleExternalRequest({
          prompt: 'Please help me debug this problem',
          conversationType: AiAssistanceModel.ConversationType.STYLING
        });
        const response = await generator.next();
        assert.strictEqual(response.value.type, 'error');
        assert.strictEqual(
            response.value.message,
            'This feature is only available when you sign into Chrome with your Google account.');
      });

      it('by user age', async () => {
        updateHostConfig({
          aidaAvailability: {
            blockedByAge: true,
          },
          devToolsFreestyler: {
            enabled: true,
          },
        });
        const {panel} = await createAiAssistancePanel({
          aidaClient: mockAidaClient([[{explanation}]]),
        });
        const generator = await panel.handleExternalRequest({
          prompt: 'Please help me debug this problem',
          conversationType: AiAssistanceModel.ConversationType.STYLING
        });
        const response = await generator.next();
        assert.strictEqual(response.value.type, 'error');
        assert.strictEqual(
            response.value.message, 'This feature is only available to users who are 18 years of age or older.');
      });
    });

    it('returns an explanation for styling assistance requests', async () => {
      const {panel} = await createAiAssistancePanel({
        aidaClient: mockAidaClient([[{explanation}]]),
      });
      const snackbarShowStub = sinon.stub(Snackbars.Snackbar.Snackbar, 'show');
      const generator = await panel.handleExternalRequest(
          {prompt: 'Please help me debug this problem', conversationType: AiAssistanceModel.ConversationType.STYLING});
      const response = await generator.next();
      assert.strictEqual(response.value.message, explanation);
      sinon.assert.calledOnceWithExactly(snackbarShowStub, {message: 'DevTools received an external request'});
    });

    it('handles styling assistance requests which contain a selector', async () => {
      const {panel} = await createAiAssistancePanel({
        aidaClient: mockAidaClient([[{explanation}]]),
      });
      const generator = await panel.handleExternalRequest({
        prompt: 'Please help me debug this problem',
        conversationType: AiAssistanceModel.ConversationType.STYLING,
        selector: 'h1'
      });
      const response = await generator.next();
      assert.strictEqual(response.value.message, explanation);
      sinon.assert.calledOnce(performSearchStub);
      assert.strictEqual(performSearchStub.getCall(0).args[0].query, 'h1');
    });

    it('returns an error if no answer could be generated', async () => {
      const {panel} = await createAiAssistancePanel({
        aidaClient: mockAidaClient([
          [{
            explanation: `ACTION
$0.style.backgroundColor = 'red'
STOP`,
          }],
        ])
      });
      const generator = await panel.handleExternalRequest(
          {prompt: 'Please help me debug this problem', conversationType: AiAssistanceModel.ConversationType.STYLING});
      const response = await generator.next();
      assert.strictEqual(response.value.type, 'error');
      assert.strictEqual(response.value.message, 'Something went wrong. No answer was generated.');
    });

    it('persists external conversations to history', async () => {
      const {panel, view} = await createAiAssistancePanel({
        aidaClient: mockAidaClient([[{explanation}]]),
      });
      const generator = await panel.handleExternalRequest(
          {prompt: 'Please help me debug this problem', conversationType: AiAssistanceModel.ConversationType.STYLING});
      await generator.next();
      const {contextMenu, id} = openHistoryContextMenu(view.input, '[External] Please help me debug this problem');
      assert.isDefined(id);
      contextMenu.invokeHandler(id);
      assert.isTrue((await view.nextInput).isReadOnly);
      assert.deepEqual(view.input.messages, [
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          imageInput: undefined,
          text: 'Please help me debug this problem',
        },
        {
          answer: explanation,
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps: [],
        },
      ]);
    });

    it('can switch contexts', async () => {
      const steps = [
        {
          contextDetails: [
            {
              text: 'Request URL: https://a.test\n\nRequest headers:\ncontent-type: bar1',
              title: 'Request',
            },
            {
              text: 'Response Status: 200 \n\nResponse headers:\ncontent-type: bar2\nx-forwarded-for: bar3',
              title: 'Response',
            },
            {
              text:
                  'Queued at (timestamp): 0 μs\nStarted at (timestamp): 0 μs\nConnection start (stalled) (duration): -\nDuration (duration): -',
              title: 'Timing',
            },
            {
              text: '- URL: https://a.test',
              title: 'Request initiator chain',
            },
          ],
          isLoading: false,
          sideEffect: undefined,
          title: 'Analyzing network data',
        },
      ] as AiAssistancePanel.Step[];

      await createNetworkPanelForMockConnection();
      updateHostConfig({
        devToolsFreestyler: {
          enabled: true,
        },
      });
      const networkRequest = createNetworkRequest({
        url: urlString`https://a.test`,
      });
      UI.Context.Context.instance().setFlavor(SDK.NetworkRequest.NetworkRequest, networkRequest);
      Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
      const {panel, view} = await createAiAssistancePanel(
          {aidaClient: mockAidaClient([[{explanation: 'test'}], [{explanation: 'test2'}], [{explanation: 'test3'}]])});

      panel.handleAction('drjones.network-floating-button');
      (await view.nextInput).onTextSubmit('User question to DrJones?');
      assert.deepEqual((await view.nextInput).messages, [
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'User question to DrJones?',
          imageInput: undefined,
        },
        {
          answer: 'test',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps,
        },
      ]);

      const generator = await panel.handleExternalRequest(
          {prompt: 'Please help me debug this problem', conversationType: AiAssistanceModel.ConversationType.STYLING});
      const response = await generator.next();
      assert.strictEqual(response.value.message, 'test2');

      view.input.onTextSubmit('Follow-up question to DrJones?');
      assert.deepEqual((await view.nextInput).messages, [
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'User question to DrJones?',
          imageInput: undefined,
        },
        {
          answer: 'test',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps,
        },
        {
          entity: AiAssistancePanel.ChatMessageEntity.USER,
          text: 'Follow-up question to DrJones?',
          imageInput: undefined,
        },
        {
          answer: 'test3',
          entity: AiAssistancePanel.ChatMessageEntity.MODEL,
          rpcId: undefined,
          suggestions: undefined,
          steps,
        },
      ]);
    });

    it('returns an explanation for network assistance requests', async () => {
      await createNetworkPanelForMockConnection();
      Common.Settings.moduleSetting('ai-assistance-enabled').set(true);
      const {panel} = await createAiAssistancePanel({
        aidaClient: mockAidaClient([[{explanation}]]),
      });
      const snackbarShowStub = sinon.stub(Snackbars.Snackbar.Snackbar, 'show');

      const request = createNetworkRequest();
      const networkManager = sinon.createStubInstance(SDK.NetworkManager.NetworkManager, {
        requestForURL: request,
      });
      sinon.stub(SDK.TargetManager.TargetManager.instance(), 'models').returns([networkManager]);

      const generator = await panel.handleExternalRequest({
        prompt: 'Please help me debug this problem',
        conversationType: AiAssistanceModel.ConversationType.NETWORK,
        requestUrl: 'https://localhost:8080/'
      });
      let response = await generator.next();
      assert.strictEqual(response.value.message, 'Analyzing network data');
      response = await generator.next();
      assert.strictEqual(response.value.message, explanation);
      sinon.assert.calledOnceWithExactly(snackbarShowStub, {message: 'DevTools received an external request'});
    });

    it('handles performance insight requests with an insight title', async function() {
      const {panel} = await createAiAssistancePanel({
        aidaClient: mockAidaClient([[{explanation}]]),
      });

      // Create a timeline panel that has a trace imported with insights.
      const events = await TraceLoader.rawEvents(this, 'web-dev-with-commit.json.gz');
      const traceModel = Trace.TraceModel.Model.createWithAllHandlers();
      await traceModel.parse(events);
      Timeline.TimelinePanel.TimelinePanel.instance({forceNew: true, isNode: false, traceModel});

      const generator = await panel.handleExternalRequest({
        prompt: 'Please help me debug this problem',
        conversationType: AiAssistanceModel.ConversationType.PERFORMANCE_INSIGHT,
        insightTitle: 'LCP breakdown'
      });
      let response = await generator.next();
      assert.strictEqual(response.value.message, 'Analyzing insight: LCP breakdown');
      response = await generator.next();
      assert.strictEqual(response.value.message, explanation);
    });

    it('errors for performance insight requests with no insightTitle', async () => {
      const {panel} = await createAiAssistancePanel({
        aidaClient: mockAidaClient([[{explanation}]]),
      });
      const generator = await panel.handleExternalRequest(
          // @ts-expect-error
          {
            prompt: 'Please help me debug this problem',
            conversationType: AiAssistanceModel.ConversationType.PERFORMANCE_INSIGHT
          });
      const response = await generator.next();
      assert.strictEqual(response.value.type, 'error');
      assert.strictEqual(
          response.value.message, 'The insightTitle parameter is required for debugging a Performance Insight.');
    });
  });
});

describeWithEnvironment('AiAssistancePanel.ActionDelegate', () => {
  beforeEach(() => {
    UI.ViewManager.ViewManager.instance({forceNew: true});
    UI.InspectorView.InspectorView.instance({forceNew: true});
  });

  it('should set drawer size to 25% of total size if it\'s less than that size', async () => {
    const totalSizeStub = 400;
    sinon.stub(UI.ViewManager.ViewManager.instance(), 'view').returns(sinon.createStubInstance(UI.View.SimpleView));
    sinon.stub(UI.ViewManager.ViewManager.instance(), 'showView');
    sinon.stub(UI.InspectorView.InspectorView.instance(), 'totalSize').returns(totalSizeStub);
    sinon.stub(UI.InspectorView.InspectorView.instance(), 'drawerSize').returns(10);
    const setDrawerSizeCall = expectCall(sinon.stub(UI.InspectorView.InspectorView.instance(), 'setDrawerSize'));

    const actionDelegate = new AiAssistancePanel.ActionDelegate();
    actionDelegate.handleAction(UI.Context.Context.instance(), 'freestyler.elements-floating-button');

    const [size] = await setDrawerSizeCall;
    assert.strictEqual(size, totalSizeStub / 4);
  });
});
