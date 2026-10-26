import { initIcon } from "./icon.js";

//the url of the multiline chart svg; resolved relative to this module
const URL_MULTILINECHART = new URL('../../assets/icons/multilineChart.svg', import.meta.url).href;

/**
 * Initializes an icon element as a multiline chart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/multilineChart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMultilineChartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MULTILINECHART }, ...properties);
}

/**
 * Creates a multiline chart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const multilineChartIcon = (...properties) => {
    const element = document.createElement('div');
    initMultilineChartIcon(element, ...properties);
    return element;
}
