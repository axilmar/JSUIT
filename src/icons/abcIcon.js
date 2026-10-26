import { initIcon } from "./icon.js";

//the url of the abc svg; resolved relative to this module
const URL_ABC = new URL('../../assets/icons/abc.svg', import.meta.url).href;

/**
 * Initializes an icon element as an abc icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/abc.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAbcIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ABC }, ...properties);
}

/**
 * Creates an abc icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const abcIcon = (...properties) => {
    const element = document.createElement('div');
    initAbcIcon(element, ...properties);
    return element;
}
