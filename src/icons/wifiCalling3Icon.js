import { initIcon } from "./icon.js";

//the url of the wifi calling3 svg; resolved relative to this module
const URL_WIFICALLING3 = new URL('../../assets/icons/wifiCalling3.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi calling3 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiCalling3.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiCalling3Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wifiCalling3Icon', url: URL_WIFICALLING3 }, ...properties);
}

/**
 * Creates a wifi calling3 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiCalling3Icon = (...properties) => {
    const element = document.createElement('div');
    initWifiCalling3Icon(element, ...properties);
    return element;
}
