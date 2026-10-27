import { initIcon } from "./icon.js";

//the url of the find in page svg; resolved relative to this module
const URL_FINDINPAGE = new URL('../../assets/icons/findInPage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a find in page icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/findInPage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFindInPageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'findInPageIcon', url: URL_FINDINPAGE }, ...properties);
}

/**
 * Creates a find in page icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const findInPageIcon = (...properties) => {
    const element = document.createElement('div');
    initFindInPageIcon(element, ...properties);
    return element;
}
