import { initIcon } from "./icon.js";

//the url of the signpost svg; resolved relative to this module
const URL_SIGNPOST = new URL('../../assets/icons/signpost.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signpost icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signpost.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignpostIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNPOST }, ...properties);
}

/**
 * Creates a signpost icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signpostIcon = (...properties) => {
    const element = document.createElement('div');
    initSignpostIcon(element, ...properties);
    return element;
}
