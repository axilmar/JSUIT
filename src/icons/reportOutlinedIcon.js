import { initIcon } from "./icon.js";

//the url of the report outlined svg; resolved relative to this module
const URL_REPORTOUTLINED = new URL('../../assets/icons/reportOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a report outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/reportOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReportOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'reportOutlinedIcon', url: URL_REPORTOUTLINED }, ...properties);
}

/**
 * Creates a report outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const reportOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initReportOutlinedIcon(element, ...properties);
    return element;
}
