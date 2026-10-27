import { initIcon } from "./icon.js";

//the url of the signal wifi off outlined svg; resolved relative to this module
const URL_SIGNALWIFIOFFOUTLINED = new URL('../../assets/icons/signalWifiOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifiOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifiOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalWifiOffOutlinedIcon', url: URL_SIGNALWIFIOFFOUTLINED }, ...properties);
}

/**
 * Creates a signal wifi off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifiOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifiOffOutlinedIcon(element, ...properties);
    return element;
}
