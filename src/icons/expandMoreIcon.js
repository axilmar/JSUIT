import { initIcon } from "./icon.js";

//the url of the expand more svg; resolved relative to this module
const URL_EXPANDMORE = new URL('../../assets/icons/expandMore.svg', import.meta.url).href;

/**
 * Initializes an icon element as an expand more icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/expandMore.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExpandMoreIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'expandMoreIcon', url: URL_EXPANDMORE }, ...properties);
}

/**
 * Creates an expand more icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const expandMoreIcon = (...properties) => {
    const element = document.createElement('div');
    initExpandMoreIcon(element, ...properties);
    return element;
}
