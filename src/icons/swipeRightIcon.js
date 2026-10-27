import { initIcon } from "./icon.js";

//the url of the swipe right svg; resolved relative to this module
const URL_SWIPERIGHT = new URL('../../assets/icons/swipeRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'swipeRightIcon', url: URL_SWIPERIGHT }, ...properties);
}

/**
 * Creates a swipe right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeRightIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeRightIcon(element, ...properties);
    return element;
}
