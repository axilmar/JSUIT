import { initIcon } from "./icon.js";

//the url of the pie chart outline outlined svg; resolved relative to this module
const URL_PIECHARTOUTLINEOUTLINED = new URL('../../assets/icons/pieChartOutlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pie chart outline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pieChartOutlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPieChartOutlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PIECHARTOUTLINEOUTLINED }, ...properties);
}

/**
 * Creates a pie chart outline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pieChartOutlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPieChartOutlineOutlinedIcon(element, ...properties);
    return element;
}
