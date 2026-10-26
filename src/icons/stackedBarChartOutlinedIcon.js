import { initIcon } from "./icon.js";

//the url of the stacked bar chart outlined svg; resolved relative to this module
const URL_STACKEDBARCHARTOUTLINED = new URL('../../assets/icons/stackedBarChartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stacked bar chart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stackedBarChartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStackedBarChartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STACKEDBARCHARTOUTLINED }, ...properties);
}

/**
 * Creates a stacked bar chart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stackedBarChartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStackedBarChartOutlinedIcon(element, ...properties);
    return element;
}
