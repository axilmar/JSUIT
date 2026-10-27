import { initIcon } from "./icon.js";

//the url of the wifi calling outlined svg; resolved relative to this module
const URL_WIFICALLINGOUTLINED = new URL('../../assets/icons/wifiCallingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi calling outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiCallingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiCallingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wifiCallingOutlinedIcon', url: URL_WIFICALLINGOUTLINED }, ...properties);
}

/**
 * Creates a wifi calling outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiCallingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiCallingOutlinedIcon(element, ...properties);
    return element;
}
