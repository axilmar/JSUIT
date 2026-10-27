import { initIcon } from "./icon.js";

//the url of the swipe down alt outlined svg; resolved relative to this module
const URL_SWIPEDOWNALTOUTLINED = new URL('../../assets/icons/swipeDownAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe down alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeDownAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeDownAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'swipeDownAltOutlinedIcon', url: URL_SWIPEDOWNALTOUTLINED }, ...properties);
}

/**
 * Creates a swipe down alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeDownAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeDownAltOutlinedIcon(element, ...properties);
    return element;
}
