import { initIcon } from "./icon.js";

//the url of the swipe left svg; resolved relative to this module
const URL_SWIPELEFT = new URL('../../assets/icons/swipeLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'swipeLeftIcon', url: URL_SWIPELEFT }, ...properties);
}

/**
 * Creates a swipe left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeLeftIcon(element, ...properties);
    return element;
}
