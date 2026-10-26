import { initIcon } from "./icon.js";

//the url of the wifi find svg; resolved relative to this module
const URL_WIFIFIND = new URL('../../assets/icons/wifiFind.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi find icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiFind.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiFindIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WIFIFIND }, ...properties);
}

/**
 * Creates a wifi find icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiFindIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiFindIcon(element, ...properties);
    return element;
}
