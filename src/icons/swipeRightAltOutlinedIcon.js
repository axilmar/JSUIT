import { initIcon } from "./icon.js";

//the url of the swipe right alt outlined svg; resolved relative to this module
const URL_SWIPERIGHTALTOUTLINED = new URL('../../assets/icons/swipeRightAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe right alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeRightAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeRightAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWIPERIGHTALTOUTLINED }, ...properties);
}

/**
 * Creates a swipe right alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeRightAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeRightAltOutlinedIcon(element, ...properties);
    return element;
}
