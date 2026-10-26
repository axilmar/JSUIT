import { initIcon } from "./icon.js";

//the url of the sos svg; resolved relative to this module
const URL_SOS = new URL('../../assets/icons/sos.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sos icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sos.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSosIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SOS }, ...properties);
}

/**
 * Creates a sos icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sosIcon = (...properties) => {
    const element = document.createElement('div');
    initSosIcon(element, ...properties);
    return element;
}
