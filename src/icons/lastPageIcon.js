import { initIcon } from "./icon.js";

//the url of the last page svg; resolved relative to this module
const URL_LASTPAGE = new URL('../../assets/icons/lastPage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a last page icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lastPage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLastPageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lastPageIcon', url: URL_LASTPAGE }, ...properties);
}

/**
 * Creates a last page icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lastPageIcon = (...properties) => {
    const element = document.createElement('div');
    initLastPageIcon(element, ...properties);
    return element;
}
