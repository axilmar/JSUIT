import { initIcon } from "./icon.js";

//the url of the request page svg; resolved relative to this module
const URL_REQUESTPAGE = new URL('../../assets/icons/requestPage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a request page icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/requestPage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRequestPageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REQUESTPAGE }, ...properties);
}

/**
 * Creates a request page icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const requestPageIcon = (...properties) => {
    const element = document.createElement('div');
    initRequestPageIcon(element, ...properties);
    return element;
}
