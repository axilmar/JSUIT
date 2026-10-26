import { initIcon } from "./icon.js";

//the url of the swipe vertical outlined svg; resolved relative to this module
const URL_SWIPEVERTICALOUTLINED = new URL('../../assets/icons/swipeVerticalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe vertical outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeVerticalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeVerticalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWIPEVERTICALOUTLINED }, ...properties);
}

/**
 * Creates a swipe vertical outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeVerticalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeVerticalOutlinedIcon(element, ...properties);
    return element;
}
