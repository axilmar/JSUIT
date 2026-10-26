import { initIcon } from "./icon.js";

//the url of the show chart svg; resolved relative to this module
const URL_SHOWCHART = new URL('../../assets/icons/showChart.svg', import.meta.url).href;

/**
 * Initializes an icon element as a show chart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/showChart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShowChartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHOWCHART }, ...properties);
}

/**
 * Creates a show chart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const showChartIcon = (...properties) => {
    const element = document.createElement('div');
    initShowChartIcon(element, ...properties);
    return element;
}
