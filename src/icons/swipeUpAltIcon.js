import { initIcon } from "./icon.js";

//the url of the swipe up alt svg; resolved relative to this module
const URL_SWIPEUPALT = new URL('../../assets/icons/swipeUpAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe up alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeUpAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeUpAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWIPEUPALT }, ...properties);
}

/**
 * Creates a swipe up alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeUpAltIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeUpAltIcon(element, ...properties);
    return element;
}
