// Copyright 2025 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import * as Common from '../../core/common/common.js';
import * as Host from '../../core/host/host.js';
import {assertNotNullOrUndefined} from '../../core/platform/platform.js';
import * as Root from '../../core/root/root.js';
import {renderElementIntoDOM} from '../../testing/DOMHelpers.js';
import {describeWithEnvironment, updateHostConfig} from '../../testing/EnvironmentHelpers.js';
import {createViewFunctionStub} from '../../testing/ViewFunctionHelpers.js';
import * as Snackbars from '../../ui/components/snackbars/snackbars.js';
import * as UI from '../../ui/legacy/legacy.js';

import * as AiCodeCompletionTeaser from './AiCodeCompletionTeaser.js';
import * as FreDialog from './FreDialog.js';

describeWithEnvironment('AiCodeCompletionTeaser', () => {
  let showFreDialogStub: sinon.SinonStub<Parameters<typeof FreDialog.FreDialog.show>, Promise<boolean>>;

  beforeEach(() => {
    showFreDialogStub = sinon.stub(FreDialog.FreDialog, 'show');
    sinon.stub(Host.AidaClient.AidaClient, 'checkAccessPreconditions')
        .resolves(Host.AidaClient.AidaAccessPreconditions.AVAILABLE);
  });

  async function createTeaser() {
    const view = createViewFunctionStub(AiCodeCompletionTeaser.AiCodeCompletionTeaser);
    const widget = new AiCodeCompletionTeaser.AiCodeCompletionTeaser(view);
    widget.markAsRoot();
    renderElementIntoDOM(widget);
    await view.nextInput;
    return {view, widget};
  }

  afterEach(() => {
    Common.Settings.Settings.instance().settingForTest('ai-code-completion-teaser-dismissed').set(false);
    Common.Settings.Settings.instance().settingForTest('ai-code-completion-fre-completed').set(false);
    sinon.restore();
  });

  it('should dismiss and open snackbar on dismiss click', async () => {
    const {view, widget} = await createTeaser();
    const showSnackbar = sinon.stub(Snackbars.Snackbar.Snackbar, 'show');

    assert.isTrue(widget.isShowing());
    assertNotNullOrUndefined(view.input.onDismiss);
    view.input.onDismiss(new Event('click'));

    sinon.assert.calledOnce(showSnackbar);
    assert.isFalse(widget.isShowing());
    widget.detach();
  });

  it('should open settings on snackbar action click', async () => {
    const {view, widget} = await createTeaser();
    const showSnackbar = sinon.stub(Snackbars.Snackbar.Snackbar, 'show');
    const showViewStub = sinon.stub(UI.ViewManager.ViewManager.instance(), 'showView');
    assertNotNullOrUndefined(view.input.onDismiss);
    view.input.onDismiss(new Event('click'));

    sinon.assert.calledOnce(showSnackbar);
    const snackbarOptions = showSnackbar.firstCall.args[0];
    assertNotNullOrUndefined(snackbarOptions.actionProperties);
    snackbarOptions.actionProperties.onClick();

    assert.isTrue(showViewStub.calledOnceWith('chrome-ai'));
    widget.detach();
  });

  it('should open FRE dialog on ctrl+i', async () => {
    const {widget} = await createTeaser();
    const onActionSpy = sinon.spy(widget, 'onAction');

    const event = Host.Platform.isMac() ? new KeyboardEvent('keydown', {key: 'i', metaKey: true}) :
                                          new KeyboardEvent('keydown', {key: 'i', ctrlKey: true});
    document.body.dispatchEvent(event);

    sinon.assert.calledOnce(onActionSpy);
    sinon.assert.called(showFreDialogStub);
    widget.detach();
  });

  it('should FRE text include no logging case when the enterprise policy value is ALLOW_WITHOUT_LOGGING', async () => {
    updateHostConfig(
        {aidaAvailability: {enterprisePolicyValue: Root.Runtime.GenAiEnterprisePolicyValue.ALLOW_WITHOUT_LOGGING}});

    const {widget} = await createTeaser();
    const event = Host.Platform.isMac() ? new KeyboardEvent('keydown', {key: 'i', metaKey: true}) :
                                          new KeyboardEvent('keydown', {key: 'i', ctrlKey: true});
    document.body.dispatchEvent(event);

    sinon.assert.called(showFreDialogStub);
    assert.exists(showFreDialogStub.lastCall.args[0].reminderItems.find(
        reminderItem =>
            reminderItem.content.toString().includes('This data will not be used to improve Google’s AI models.')));
    widget.detach();
  });

  it('should FRE text not include no logging case when the enterprise policy value is ALLOW', async () => {
    updateHostConfig({aidaAvailability: {enterprisePolicyValue: Root.Runtime.GenAiEnterprisePolicyValue.ALLOW}});

    const {widget} = await createTeaser();
    const event = Host.Platform.isMac() ? new KeyboardEvent('keydown', {key: 'i', metaKey: true}) :
                                          new KeyboardEvent('keydown', {key: 'i', ctrlKey: true});
    document.body.dispatchEvent(event);

    sinon.assert.called(showFreDialogStub);
    assert.notExists(showFreDialogStub.lastCall.args[0].reminderItems.find(
        reminderItem =>
            reminderItem.content.toString().includes('This data will not be used to improve Google’s AI models.')));
    widget.detach();
  });

  it('should call dismiss on ctrl+x', async () => {
    const {widget} = await createTeaser();
    const onDismissSpy = sinon.spy(widget, 'onDismiss');
    const showSnackbar = sinon.stub(Snackbars.Snackbar.Snackbar, 'show');

    assert.isTrue(widget.isShowing());

    const event = Host.Platform.isMac() ? new KeyboardEvent('keydown', {key: 'x', metaKey: true}) :
                                          new KeyboardEvent('keydown', {key: 'x', ctrlKey: true});
    document.body.dispatchEvent(event);

    sinon.assert.calledOnce(onDismissSpy);
    sinon.assert.calledOnce(showSnackbar);
    assert.isFalse(widget.isShowing());
    widget.detach();
  });
});
