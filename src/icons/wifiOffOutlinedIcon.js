import { initIcon } from "./icon.js";

//the url of the wifi off outlined svg; resolved relative to this module
const URL_WIFIOFFOUTLINED = new URL('../../assets/icons/wifiOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wifiOffOutlinedIcon', url: URL_WIFIOFFOUTLINED }, ...properties);
}

/**
 * Creates a wifi off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiOffOutlinedIcon(element, ...properties);
    return element;
}
