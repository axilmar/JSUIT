import { initIcon } from "./icon.js";

//the url of the swipe vertical svg; resolved relative to this module
const URL_SWIPEVERTICAL = new URL('../../assets/icons/swipeVertical.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe vertical icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeVertical.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeVerticalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'swipeVerticalIcon', url: URL_SWIPEVERTICAL }, ...properties);
}

/**
 * Creates a swipe vertical icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeVerticalIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeVerticalIcon(element, ...properties);
    return element;
}
