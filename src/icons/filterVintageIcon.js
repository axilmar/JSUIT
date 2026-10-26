import { initIcon } from "./icon.js";

//the url of the filter vintage svg; resolved relative to this module
const URL_FILTERVINTAGE = new URL('../../assets/icons/filterVintage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter vintage icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterVintage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterVintageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTERVINTAGE }, ...properties);
}

/**
 * Creates a filter vintage icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterVintageIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterVintageIcon(element, ...properties);
    return element;
}
