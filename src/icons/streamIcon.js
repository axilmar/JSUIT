import { initIcon } from "./icon.js";

//the url of the stream svg; resolved relative to this module
const URL_STREAM = new URL('../../assets/icons/stream.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stream icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stream.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStreamIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STREAM }, ...properties);
}

/**
 * Creates a stream icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const streamIcon = (...properties) => {
    const element = document.createElement('div');
    initStreamIcon(element, ...properties);
    return element;
}
