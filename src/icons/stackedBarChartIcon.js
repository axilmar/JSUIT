import { initIcon } from "./icon.js";

//the url of the stacked bar chart svg; resolved relative to this module
const URL_STACKEDBARCHART = new URL('../../assets/icons/stackedBarChart.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stacked bar chart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stackedBarChart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStackedBarChartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STACKEDBARCHART }, ...properties);
}

/**
 * Creates a stacked bar chart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stackedBarChartIcon = (...properties) => {
    const element = document.createElement('div');
    initStackedBarChartIcon(element, ...properties);
    return element;
}
