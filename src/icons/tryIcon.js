import { initIcon } from "./icon.js";

//the url of the try svg; resolved relative to this module
const URL_TRY = new URL('../../assets/icons/try.svg', import.meta.url).href;

/**
 * Initializes an icon element as a try icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/try.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTryIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TRY }, ...properties);
}

/**
 * Creates a try icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tryIcon = (...properties) => {
    const element = document.createElement('div');
    initTryIcon(element, ...properties);
    return element;
}
