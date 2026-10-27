import { initIcon } from "./icon.js";

//the url of the swipe down svg; resolved relative to this module
const URL_SWIPEDOWN = new URL('../../assets/icons/swipeDown.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe down icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeDown.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeDownIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'swipeDownIcon', url: URL_SWIPEDOWN }, ...properties);
}

/**
 * Creates a swipe down icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeDownIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeDownIcon(element, ...properties);
    return element;
}
