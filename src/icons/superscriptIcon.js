import { initIcon } from "./icon.js";

//the url of the superscript svg; resolved relative to this module
const URL_SUPERSCRIPT = new URL('../../assets/icons/superscript.svg', import.meta.url).href;

/**
 * Initializes an icon element as a superscript icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/superscript.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSuperscriptIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SUPERSCRIPT }, ...properties);
}

/**
 * Creates a superscript icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const superscriptIcon = (...properties) => {
    const element = document.createElement('div');
    initSuperscriptIcon(element, ...properties);
    return element;
}
