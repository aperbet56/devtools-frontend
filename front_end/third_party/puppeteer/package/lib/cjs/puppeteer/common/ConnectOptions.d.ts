/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Session } from 'chromium-bidi/lib/cjs/protocol/protocol.js';
import type { IsPageTargetCallback, TargetFilterCallback } from '../api/Browser.js';
import type { ConnectionTransport } from './ConnectionTransport.js';
import type { DownloadBehavior } from './DownloadBehavior.js';
import type { Viewport } from './Viewport.js';
/**
 * @public
 */
export type ProtocolType = 'cdp' | 'webDriverBiDi';
/**
 * @public
 */
export type SupportedWebDriverCapability = Exclude<Session.CapabilityRequest, 'unhandledPromptBehavior' | 'acceptInsecureCerts'>;
/**
 * WebDriver BiDi capabilities that are not set by Puppeteer itself.
 *
 * @public
 */
export interface SupportedWebDriverCapabilities {
    firstMatch?: SupportedWebDriverCapability[];
    alwaysMatch?: SupportedWebDriverCapability;
}
/**
 * Generic browser options that can be passed when launching any browser or when
 * connecting to an existing browser instance.
 * @public
 */
export interface ConnectOptions {
    /**
     * Whether to ignore HTTPS errors during navigation.
     * @defaultValue `false`
     */
    acceptInsecureCerts?: boolean;
    /**
     * Experimental setting to disable monitoring network events by default. When
     * set to `false`, parts of Puppeteer that depend on network events would not
     * work such as HTTPRequest and HTTPResponse.
     *
     * @experimental
     * @defaultValue `true`
     */
    networkEnabled?: boolean;
    /**
     * Sets the viewport for each page.
     *
     * @defaultValue '\{width: 800, height: 600\}'
     */
    defaultViewport?: Viewport | null;
    /**
     * Sets the download behavior for the context.
     */
    downloadBehavior?: DownloadBehavior;
    /**
     * Slows down Puppeteer operations by the specified amount of milliseconds to
     * aid debugging.
     */
    slowMo?: number;
    /**
     * Callback to decide if Puppeteer should connect to a given target or not.
     */
    targetFilter?: TargetFilterCallback;
    /**
     * @internal
     */
    _isPageTarget?: IsPageTargetCallback;
    /**
     * @defaultValue Determined at run time:
     *
     * - Launching Chrome - 'cdp'.
     *
     * - Launching Firefox - 'webDriverBiDi'.
     *
     * - Connecting to a browser - 'cdp'.
     *
     * @public
     */
    protocol?: ProtocolType;
    /**
     * Timeout setting for individual protocol (CDP) calls.
     *
     * @defaultValue `180_000`
     */
    protocolTimeout?: number;
    browserWSEndpoint?: string;
    browserURL?: string;
    transport?: ConnectionTransport;
    /**
     * Headers to use for the web socket connection.
     * @remarks
     * Only works in the Node.js environment.
     */
    headers?: Record<string, string>;
    /**
     * WebDriver BiDi capabilities passed to BiDi `session.new`.
     *
     * @remarks
     * Only works for `protocol="webDriverBiDi"` and {@link Puppeteer.connect}.
     */
    capabilities?: SupportedWebDriverCapabilities;
}
//# sourceMappingURL=ConnectOptions.d.ts.map