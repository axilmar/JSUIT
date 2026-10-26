import { initIcon } from "./icon.js";

//the url of the read more svg; resolved relative to this module
const URL_READMORE = new URL('../../assets/icons/readMore.svg', import.meta.url).href;

/**
 * Initializes an icon element as a read more icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/readMore.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReadMoreIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_READMORE }, ...properties);
}

/**
 * Creates a read more icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const readMoreIcon = (...properties) => {
    const element = document.createElement('div');
    initReadMoreIcon(element, ...properties);
    return element;
}
