import { initIcon } from "./icon.js";

//the url of the trending flat svg; resolved relative to this module
const URL_TRENDINGFLAT = new URL('../../assets/icons/trendingFlat.svg', import.meta.url).href;

/**
 * Initializes an icon element as a trending flat icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/trendingFlat.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTrendingFlatIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TRENDINGFLAT }, ...properties);
}

/**
 * Creates a trending flat icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const trendingFlatIcon = (...properties) => {
    const element = document.createElement('div');
    initTrendingFlatIcon(element, ...properties);
    return element;
}
