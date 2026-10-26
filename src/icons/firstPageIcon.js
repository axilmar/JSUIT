import { initIcon } from "./icon.js";

//the url of the first page svg; resolved relative to this module
const URL_FIRSTPAGE = new URL('../../assets/icons/firstPage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a first page icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/firstPage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFirstPageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FIRSTPAGE }, ...properties);
}

/**
 * Creates a first page icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const firstPageIcon = (...properties) => {
    const element = document.createElement('div');
    initFirstPageIcon(element, ...properties);
    return element;
}
