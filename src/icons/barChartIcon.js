import { initIcon } from "./icon.js";

//the url of the bar chart svg; resolved relative to this module
const URL_BARCHART = new URL('../../assets/icons/barChart.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bar chart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/barChart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBarChartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'barChartIcon', url: URL_BARCHART }, ...properties);
}

/**
 * Creates a bar chart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const barChartIcon = (...properties) => {
    const element = document.createElement('div');
    initBarChartIcon(element, ...properties);
    return element;
}
