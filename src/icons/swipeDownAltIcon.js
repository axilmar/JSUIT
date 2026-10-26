import { initIcon } from "./icon.js";

//the url of the swipe down alt svg; resolved relative to this module
const URL_SWIPEDOWNALT = new URL('../../assets/icons/swipeDownAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe down alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeDownAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeDownAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWIPEDOWNALT }, ...properties);
}

/**
 * Creates a swipe down alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeDownAltIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeDownAltIcon(element, ...properties);
    return element;
}
