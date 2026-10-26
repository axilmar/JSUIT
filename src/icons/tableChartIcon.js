import { initIcon } from "./icon.js";

//the url of the table chart svg; resolved relative to this module
const URL_TABLECHART = new URL('../../assets/icons/tableChart.svg', import.meta.url).href;

/**
 * Initializes an icon element as a table chart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tableChart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTableChartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TABLECHART }, ...properties);
}

/**
 * Creates a table chart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tableChartIcon = (...properties) => {
    const element = document.createElement('div');
    initTableChartIcon(element, ...properties);
    return element;
}
