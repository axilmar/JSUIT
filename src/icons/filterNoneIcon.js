import { initIcon } from "./icon.js";

//the url of the filter none svg; resolved relative to this module
const URL_FILTERNONE = new URL('../../assets/icons/filterNone.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter none icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterNone.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterNoneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filterNoneIcon', url: URL_FILTERNONE }, ...properties);
}

/**
 * Creates a filter none icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterNoneIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterNoneIcon(element, ...properties);
    return element;
}
