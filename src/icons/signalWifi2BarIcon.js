import { initIcon } from "./icon.js";

//the url of the signal wifi2 bar svg; resolved relative to this module
const URL_SIGNALWIFI2BAR = new URL('../../assets/icons/signalWifi2Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi2 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifi2Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifi2BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalWifi2BarIcon', url: URL_SIGNALWIFI2BAR }, ...properties);
}

/**
 * Creates a signal wifi2 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifi2BarIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifi2BarIcon(element, ...properties);
    return element;
}
