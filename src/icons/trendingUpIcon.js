import { initIcon } from "./icon.js";

//the url of the trending up svg; resolved relative to this module
const URL_TRENDINGUP = new URL('../../assets/icons/trendingUp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a trending up icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/trendingUp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTrendingUpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TRENDINGUP }, ...properties);
}

/**
 * Creates a trending up icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const trendingUpIcon = (...properties) => {
    const element = document.createElement('div');
    initTrendingUpIcon(element, ...properties);
    return element;
}
