import { initIcon } from "./icon.js";

//the url of the report off outlined svg; resolved relative to this module
const URL_REPORTOFFOUTLINED = new URL('../../assets/icons/reportOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a report off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/reportOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReportOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REPORTOFFOUTLINED }, ...properties);
}

/**
 * Creates a report off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const reportOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initReportOffOutlinedIcon(element, ...properties);
    return element;
}
