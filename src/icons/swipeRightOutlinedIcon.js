import { initIcon } from "./icon.js";

//the url of the swipe right outlined svg; resolved relative to this module
const URL_SWIPERIGHTOUTLINED = new URL('../../assets/icons/swipeRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWIPERIGHTOUTLINED }, ...properties);
}

/**
 * Creates a swipe right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeRightOutlinedIcon(element, ...properties);
    return element;
}
