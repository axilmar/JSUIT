import { initIcon } from "./icon.js";

//the url of the signal wifi0 bar svg; resolved relative to this module
const URL_SIGNALWIFI0BAR = new URL('../../assets/icons/signalWifi0Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi0 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifi0Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifi0BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalWifi0BarIcon', url: URL_SIGNALWIFI0BAR }, ...properties);
}

/**
 * Creates a signal wifi0 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifi0BarIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifi0BarIcon(element, ...properties);
    return element;
}
