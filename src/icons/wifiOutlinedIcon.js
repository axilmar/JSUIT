import { initIcon } from "./icon.js";

//the url of the wifi outlined svg; resolved relative to this module
const URL_WIFIOUTLINED = new URL('../../assets/icons/wifiOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wifiOutlinedIcon', url: URL_WIFIOUTLINED }, ...properties);
}

/**
 * Creates a wifi outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiOutlinedIcon(element, ...properties);
    return element;
}
