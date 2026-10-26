import { initIcon } from "./icon.js";

//the url of the bar chart outlined svg; resolved relative to this module
const URL_BARCHARTOUTLINED = new URL('../../assets/icons/barChartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bar chart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/barChartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBarChartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BARCHARTOUTLINED }, ...properties);
}

/**
 * Creates a bar chart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const barChartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBarChartOutlinedIcon(element, ...properties);
    return element;
}
