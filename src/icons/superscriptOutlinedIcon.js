import { initIcon } from "./icon.js";

//the url of the superscript outlined svg; resolved relative to this module
const URL_SUPERSCRIPTOUTLINED = new URL('../../assets/icons/superscriptOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a superscript outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/superscriptOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSuperscriptOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SUPERSCRIPTOUTLINED }, ...properties);
}

/**
 * Creates a superscript outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const superscriptOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSuperscriptOutlinedIcon(element, ...properties);
    return element;
}
