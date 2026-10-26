import { initIcon } from "./icon.js";

//the url of the swipe right alt svg; resolved relative to this module
const URL_SWIPERIGHTALT = new URL('../../assets/icons/swipeRightAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe right alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeRightAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeRightAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWIPERIGHTALT }, ...properties);
}

/**
 * Creates a swipe right alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeRightAltIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeRightAltIcon(element, ...properties);
    return element;
}
