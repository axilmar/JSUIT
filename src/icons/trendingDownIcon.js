import { initIcon } from "./icon.js";

//the url of the trending down svg; resolved relative to this module
const URL_TRENDINGDOWN = new URL('../../assets/icons/trendingDown.svg', import.meta.url).href;

/**
 * Initializes an icon element as a trending down icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/trendingDown.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTrendingDownIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'trendingDownIcon', url: URL_TRENDINGDOWN }, ...properties);
}

/**
 * Creates a trending down icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const trendingDownIcon = (...properties) => {
    const element = document.createElement('div');
    initTrendingDownIcon(element, ...properties);
    return element;
}
