import { initIcon } from "./icon.js";

//the url of the swipe up outlined svg; resolved relative to this module
const URL_SWIPEUPOUTLINED = new URL('../../assets/icons/swipeUpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe up outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeUpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeUpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWIPEUPOUTLINED }, ...properties);
}

/**
 * Creates a swipe up outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeUpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeUpOutlinedIcon(element, ...properties);
    return element;
}
