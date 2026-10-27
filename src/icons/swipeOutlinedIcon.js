import { initIcon } from "./icon.js";

//the url of the swipe outlined svg; resolved relative to this module
const URL_SWIPEOUTLINED = new URL('../../assets/icons/swipeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'swipeOutlinedIcon', url: URL_SWIPEOUTLINED }, ...properties);
}

/**
 * Creates a swipe outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeOutlinedIcon(element, ...properties);
    return element;
}
