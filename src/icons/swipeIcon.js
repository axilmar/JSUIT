import { initIcon } from "./icon.js";

//the url of the swipe svg; resolved relative to this module
const URL_SWIPE = new URL('../../assets/icons/swipe.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipe.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'swipeIcon', url: URL_SWIPE }, ...properties);
}

/**
 * Creates a swipe icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeIcon(element, ...properties);
    return element;
}
