import { initIcon } from "./icon.js";

//the url of the fast rewind svg; resolved relative to this module
const URL_FASTREWIND = new URL('../../assets/icons/fastRewind.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fast rewind icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fastRewind.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFastRewindIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fastRewindIcon', url: URL_FASTREWIND }, ...properties);
}

/**
 * Creates a fast rewind icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fastRewindIcon = (...properties) => {
    const element = document.createElement('div');
    initFastRewindIcon(element, ...properties);
    return element;
}
