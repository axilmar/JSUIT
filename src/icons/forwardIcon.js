import { initIcon } from "./icon.js";

//the url of the forward svg; resolved relative to this module
const URL_FORWARD = new URL('../../assets/icons/forward.svg', import.meta.url).href;

/**
 * Initializes an icon element as a forward icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forward.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForwardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORWARD }, ...properties);
}

/**
 * Creates a forward icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forwardIcon = (...properties) => {
    const element = document.createElement('div');
    initForwardIcon(element, ...properties);
    return element;
}
