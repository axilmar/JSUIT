import { initIcon } from "./icon.js";

//the url of the swipe left alt outlined svg; resolved relative to this module
const URL_SWIPELEFTALTOUTLINED = new URL('../../assets/icons/swipeLeftAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe left alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeLeftAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeLeftAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWIPELEFTALTOUTLINED }, ...properties);
}

/**
 * Creates a swipe left alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeLeftAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeLeftAltOutlinedIcon(element, ...properties);
    return element;
}
