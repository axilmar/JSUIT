import { initIcon } from "./icon.js";

//the url of the report gmailerrorred outlined svg; resolved relative to this module
const URL_REPORTGMAILERRORREDOUTLINED = new URL('../../assets/icons/reportGmailerrorredOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a report gmailerrorred outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/reportGmailerrorredOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReportGmailerrorredOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'reportGmailerrorredOutlinedIcon', url: URL_REPORTGMAILERRORREDOUTLINED }, ...properties);
}

/**
 * Creates a report gmailerrorred outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const reportGmailerrorredOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initReportGmailerrorredOutlinedIcon(element, ...properties);
    return element;
}
