import { initIcon } from "./icon.js";

//the url of the wifi2 bar svg; resolved relative to this module
const URL_WIFI2BAR = new URL('../../assets/icons/wifi2Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi2 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifi2Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifi2BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WIFI2BAR }, ...properties);
}

/**
 * Creates a wifi2 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifi2BarIcon = (...properties) => {
    const element = document.createElement('div');
    initWifi2BarIcon(element, ...properties);
    return element;
}
