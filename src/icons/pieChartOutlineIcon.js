import { initIcon } from "./icon.js";

//the url of the pie chart outline svg; resolved relative to this module
const URL_PIECHARTOUTLINE = new URL('../../assets/icons/pieChartOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pie chart outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pieChartOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPieChartOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pieChartOutlineIcon', url: URL_PIECHARTOUTLINE }, ...properties);
}

/**
 * Creates a pie chart outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pieChartOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initPieChartOutlineIcon(element, ...properties);
    return element;
}
