import { initIcon } from "./icon.js";

//the url of the swipe up alt outlined svg; resolved relative to this module
const URL_SWIPEUPALTOUTLINED = new URL('../../assets/icons/swipeUpAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe up alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeUpAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeUpAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'swipeUpAltOutlinedIcon', url: URL_SWIPEUPALTOUTLINED }, ...properties);
}

/**
 * Creates a swipe up alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeUpAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeUpAltOutlinedIcon(element, ...properties);
    return element;
}
