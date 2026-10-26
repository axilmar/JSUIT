import { initIcon } from "./icon.js";

//the url of the unarchive svg; resolved relative to this module
const URL_UNARCHIVE = new URL('../../assets/icons/unarchive.svg', import.meta.url).href;

/**
 * Initializes an icon element as an unarchive icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/unarchive.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUnarchiveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_UNARCHIVE }, ...properties);
}

/**
 * Creates an unarchive icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const unarchiveIcon = (...properties) => {
    const element = document.createElement('div');
    initUnarchiveIcon(element, ...properties);
    return element;
}
