import { initIcon } from "./icon.js";

//the url of the details svg; resolved relative to this module
const URL_DETAILS = new URL('../../assets/icons/details.svg', import.meta.url).href;

/**
 * Initializes an icon element as a details icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/details.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDetailsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DETAILS }, ...properties);
}

/**
 * Creates a details icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const detailsIcon = (...properties) => {
    const element = document.createElement('div');
    initDetailsIcon(element, ...properties);
    return element;
}
