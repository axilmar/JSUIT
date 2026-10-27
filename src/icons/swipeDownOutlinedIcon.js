import { initIcon } from "./icon.js";

//the url of the swipe down outlined svg; resolved relative to this module
const URL_SWIPEDOWNOUTLINED = new URL('../../assets/icons/swipeDownOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe down outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeDownOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeDownOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'swipeDownOutlinedIcon', url: URL_SWIPEDOWNOUTLINED }, ...properties);
}

/**
 * Creates a swipe down outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeDownOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeDownOutlinedIcon(element, ...properties);
    return element;
}
