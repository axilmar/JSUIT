import { initIcon } from "./icon.js";

//the url of the date range svg; resolved relative to this module
const URL_DATERANGE = new URL('../../assets/icons/dateRange.svg', import.meta.url).href;

/**
 * Initializes an icon element as a date range icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dateRange.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDateRangeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DATERANGE }, ...properties);
}

/**
 * Creates a date range icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dateRangeIcon = (...properties) => {
    const element = document.createElement('div');
    initDateRangeIcon(element, ...properties);
    return element;
}
