import { initIcon } from "./icon.js";

//the url of the report problem svg; resolved relative to this module
const URL_REPORTPROBLEM = new URL('../../assets/icons/reportProblem.svg', import.meta.url).href;

/**
 * Initializes an icon element as a report problem icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/reportProblem.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReportProblemIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REPORTPROBLEM }, ...properties);
}

/**
 * Creates a report problem icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const reportProblemIcon = (...properties) => {
    const element = document.createElement('div');
    initReportProblemIcon(element, ...properties);
    return element;
}
