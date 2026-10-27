import { initIcon } from "./icon.js";

//the url of the bubble chart svg; resolved relative to this module
const URL_BUBBLECHART = new URL('../../assets/icons/bubbleChart.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bubble chart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bubbleChart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBubbleChartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bubbleChartIcon', url: URL_BUBBLECHART }, ...properties);
}

/**
 * Creates a bubble chart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bubbleChartIcon = (...properties) => {
    const element = document.createElement('div');
    initBubbleChartIcon(element, ...properties);
    return element;
}
