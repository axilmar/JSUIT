import { initIcon } from "./icon.js";

//the url of the portable wifi off outlined svg; resolved relative to this module
const URL_PORTABLEWIFIOFFOUTLINED = new URL('../../assets/icons/portableWifiOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a portable wifi off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/portableWifiOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPortableWifiOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PORTABLEWIFIOFFOUTLINED }, ...properties);
}

/**
 * Creates a portable wifi off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const portableWifiOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPortableWifiOffOutlinedIcon(element, ...properties);
    return element;
}
