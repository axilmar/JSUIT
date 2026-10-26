import { initIcon } from "./icon.js";

//the url of the bug report svg; resolved relative to this module
const URL_BUGREPORT = new URL('../../assets/icons/bugReport.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bug report icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bugReport.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBugReportIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BUGREPORT }, ...properties);
}

/**
 * Creates a bug report icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bugReportIcon = (...properties) => {
    const element = document.createElement('div');
    initBugReportIcon(element, ...properties);
    return element;
}
