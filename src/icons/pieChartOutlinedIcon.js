import { initIcon } from "./icon.js";

//the url of the pie chart outlined svg; resolved relative to this module
const URL_PIECHARTOUTLINED = new URL('../../assets/icons/pieChartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pie chart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pieChartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPieChartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pieChartOutlinedIcon', url: URL_PIECHARTOUTLINED }, ...properties);
}

/**
 * Creates a pie chart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pieChartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPieChartOutlinedIcon(element, ...properties);
    return element;
}
