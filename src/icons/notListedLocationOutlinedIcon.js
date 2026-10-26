import { initIcon } from "./icon.js";

//the url of the not listed location outlined svg; resolved relative to this module
const URL_NOTLISTEDLOCATIONOUTLINED = new URL('../../assets/icons/notListedLocationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a not listed location outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notListedLocationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotListedLocationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOTLISTEDLOCATIONOUTLINED }, ...properties);
}

/**
 * Creates a not listed location outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notListedLocationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNotListedLocationOutlinedIcon(element, ...properties);
    return element;
}
