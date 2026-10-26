import { initIcon } from "./icon.js";

//the url of the not listed location svg; resolved relative to this module
const URL_NOTLISTEDLOCATION = new URL('../../assets/icons/notListedLocation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a not listed location icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notListedLocation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotListedLocationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOTLISTEDLOCATION }, ...properties);
}

/**
 * Creates a not listed location icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notListedLocationIcon = (...properties) => {
    const element = document.createElement('div');
    initNotListedLocationIcon(element, ...properties);
    return element;
}
