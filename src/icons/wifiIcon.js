import { initIcon } from "./icon.js";

//the url of the wifi svg; resolved relative to this module
const URL_WIFI = new URL('../../assets/icons/wifi.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifi.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wifiIcon', url: URL_WIFI }, ...properties);
}

/**
 * Creates a wifi icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiIcon(element, ...properties);
    return element;
}
