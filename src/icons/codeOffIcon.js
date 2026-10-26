import { initIcon } from "./icon.js";

//the url of the code off svg; resolved relative to this module
const URL_CODEOFF = new URL('../../assets/icons/codeOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a code off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/codeOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCodeOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CODEOFF }, ...properties);
}

/**
 * Creates a code off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const codeOffIcon = (...properties) => {
    const element = document.createElement('div');
    initCodeOffIcon(element, ...properties);
    return element;
}
