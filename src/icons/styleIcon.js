import { initIcon } from "./icon.js";

//the url of the style svg; resolved relative to this module
const URL_STYLE = new URL('../../assets/icons/style.svg', import.meta.url).href;

/**
 * Initializes an icon element as a style icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/style.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStyleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STYLE }, ...properties);
}

/**
 * Creates a style icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const styleIcon = (...properties) => {
    const element = document.createElement('div');
    initStyleIcon(element, ...properties);
    return element;
}
