import { initIcon } from "./icon.js";

//the url of the report gmailerrorred svg; resolved relative to this module
const URL_REPORTGMAILERRORRED = new URL('../../assets/icons/reportGmailerrorred.svg', import.meta.url).href;

/**
 * Initializes an icon element as a report gmailerrorred icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/reportGmailerrorred.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReportGmailerrorredIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REPORTGMAILERRORRED }, ...properties);
}

/**
 * Creates a report gmailerrorred icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const reportGmailerrorredIcon = (...properties) => {
    const element = document.createElement('div');
    initReportGmailerrorredIcon(element, ...properties);
    return element;
}
