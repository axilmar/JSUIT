import { initIcon } from "./icon.js";

//the url of the pie chart svg; resolved relative to this module
const URL_PIECHART = new URL('../../assets/icons/pieChart.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pie chart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pieChart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPieChartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PIECHART }, ...properties);
}

/**
 * Creates a pie chart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pieChartIcon = (...properties) => {
    const element = document.createElement('div');
    initPieChartIcon(element, ...properties);
    return element;
}
