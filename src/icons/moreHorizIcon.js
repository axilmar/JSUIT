import { initIcon } from "./icon.js";

//the url of the more horiz svg; resolved relative to this module
const URL_MOREHORIZ = new URL('../../assets/icons/moreHoriz.svg', import.meta.url).href;

/**
 * Initializes an icon element as a more horiz icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moreHoriz.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoreHorizIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOREHORIZ }, ...properties);
}

/**
 * Creates a more horiz icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moreHorizIcon = (...properties) => {
    const element = document.createElement('div');
    initMoreHorizIcon(element, ...properties);
    return element;
}
