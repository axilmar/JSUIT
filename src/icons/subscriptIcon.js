import { initIcon } from "./icon.js";

//the url of the subscript svg; resolved relative to this module
const URL_SUBSCRIPT = new URL('../../assets/icons/subscript.svg', import.meta.url).href;

/**
 * Initializes an icon element as a subscript icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/subscript.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSubscriptIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SUBSCRIPT }, ...properties);
}

/**
 * Creates a subscript icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const subscriptIcon = (...properties) => {
    const element = document.createElement('div');
    initSubscriptIcon(element, ...properties);
    return element;
}
