import { initIcon } from "./icon.js";

//the url of the signal wifi connected no internet4 svg; resolved relative to this module
const URL_SIGNALWIFICONNECTEDNOINTERNET4 = new URL('../../assets/icons/signalWifiConnectedNoInternet4.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi connected no internet4 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifiConnectedNoInternet4.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifiConnectedNoInternet4Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalWifiConnectedNoInternet4Icon', url: URL_SIGNALWIFICONNECTEDNOINTERNET4 }, ...properties);
}

/**
 * Creates a signal wifi connected no internet4 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifiConnectedNoInternet4Icon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifiConnectedNoInternet4Icon(element, ...properties);
    return element;
}
