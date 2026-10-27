import { initIcon } from "./icon.js";

//the url of the wifi calling svg; resolved relative to this module
const URL_WIFICALLING = new URL('../../assets/icons/wifiCalling.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi calling icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiCalling.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiCallingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wifiCallingIcon', url: URL_WIFICALLING }, ...properties);
}

/**
 * Creates a wifi calling icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiCallingIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiCallingIcon(element, ...properties);
    return element;
}
