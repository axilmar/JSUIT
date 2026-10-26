import { initIcon } from "./icon.js";

//the url of the sd svg; resolved relative to this module
const URL_SD = new URL('../../assets/icons/sd.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sd icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSdIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SD }, ...properties);
}

/**
 * Creates a sd icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sdIcon = (...properties) => {
    const element = document.createElement('div');
    initSdIcon(element, ...properties);
    return element;
}
