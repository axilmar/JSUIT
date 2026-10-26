import { initIcon } from "./icon.js";

//the url of the cast svg; resolved relative to this module
const URL_CAST = new URL('../../assets/icons/cast.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cast icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cast.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCastIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CAST }, ...properties);
}

/**
 * Creates a cast icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const castIcon = (...properties) => {
    const element = document.createElement('div');
    initCastIcon(element, ...properties);
    return element;
}
