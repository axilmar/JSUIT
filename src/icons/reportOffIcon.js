import { initIcon } from "./icon.js";

//the url of the report off svg; resolved relative to this module
const URL_REPORTOFF = new URL('../../assets/icons/reportOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a report off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/reportOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReportOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REPORTOFF }, ...properties);
}

/**
 * Creates a report off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const reportOffIcon = (...properties) => {
    const element = document.createElement('div');
    initReportOffIcon(element, ...properties);
    return element;
}
