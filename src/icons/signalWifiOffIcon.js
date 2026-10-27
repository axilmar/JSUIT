import { initIcon } from "./icon.js";

//the url of the signal wifi off svg; resolved relative to this module
const URL_SIGNALWIFIOFF = new URL('../../assets/icons/signalWifiOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifiOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifiOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalWifiOffIcon', url: URL_SIGNALWIFIOFF }, ...properties);
}

/**
 * Creates a signal wifi off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifiOffIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifiOffIcon(element, ...properties);
    return element;
}
