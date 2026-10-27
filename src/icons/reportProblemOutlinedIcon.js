import { initIcon } from "./icon.js";

//the url of the report problem outlined svg; resolved relative to this module
const URL_REPORTPROBLEMOUTLINED = new URL('../../assets/icons/reportProblemOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a report problem outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/reportProblemOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReportProblemOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'reportProblemOutlinedIcon', url: URL_REPORTPROBLEMOUTLINED }, ...properties);
}

/**
 * Creates a report problem outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const reportProblemOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initReportProblemOutlinedIcon(element, ...properties);
    return element;
}
