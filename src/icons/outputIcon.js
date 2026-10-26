import { initIcon } from "./icon.js";

//the url of the output svg; resolved relative to this module
const URL_OUTPUT = new URL('../../assets/icons/output.svg', import.meta.url).href;

/**
 * Initializes an icon element as an output icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/output.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOutputIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OUTPUT }, ...properties);
}

/**
 * Creates an output icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const outputIcon = (...properties) => {
    const element = document.createElement('div');
    initOutputIcon(element, ...properties);
    return element;
}
