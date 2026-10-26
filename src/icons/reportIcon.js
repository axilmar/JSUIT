import { initIcon } from "./icon.js";

//the url of the report svg; resolved relative to this module
const URL_REPORT = new URL('../../assets/icons/report.svg', import.meta.url).href;

/**
 * Initializes an icon element as a report icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/report.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReportIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REPORT }, ...properties);
}

/**
 * Creates a report icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const reportIcon = (...properties) => {
    const element = document.createElement('div');
    initReportIcon(element, ...properties);
    return element;
}
