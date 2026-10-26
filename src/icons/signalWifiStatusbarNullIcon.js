import { initIcon } from "./icon.js";

//the url of the signal wifi statusbar null svg; resolved relative to this module
const URL_SIGNALWIFISTATUSBARNULL = new URL('../../assets/icons/signalWifiStatusbarNull.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi statusbar null icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifiStatusbarNull.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifiStatusbarNullIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALWIFISTATUSBARNULL }, ...properties);
}

/**
 * Creates a signal wifi statusbar null icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifiStatusbarNullIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifiStatusbarNullIcon(element, ...properties);
    return element;
}
