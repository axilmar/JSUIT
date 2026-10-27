import { initIcon } from "./icon.js";

//the url of the trending down outlined svg; resolved relative to this module
const URL_TRENDINGDOWNOUTLINED = new URL('../../assets/icons/trendingDownOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a trending down outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/trendingDownOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTrendingDownOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'trendingDownOutlinedIcon', url: URL_TRENDINGDOWNOUTLINED }, ...properties);
}

/**
 * Creates a trending down outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const trendingDownOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTrendingDownOutlinedIcon(element, ...properties);
    return element;
}
