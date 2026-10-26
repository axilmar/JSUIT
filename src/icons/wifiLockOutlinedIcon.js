import { initIcon } from "./icon.js";

//the url of the wifi lock outlined svg; resolved relative to this module
const URL_WIFILOCKOUTLINED = new URL('../../assets/icons/wifiLockOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi lock outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiLockOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiLockOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WIFILOCKOUTLINED }, ...properties);
}

/**
 * Creates a wifi lock outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiLockOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiLockOutlinedIcon(element, ...properties);
    return element;
}
