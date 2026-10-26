import { initIcon } from "./icon.js";

//the url of the swipe left alt svg; resolved relative to this module
const URL_SWIPELEFTALT = new URL('../../assets/icons/swipeLeftAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swipe left alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swipeLeftAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwipeLeftAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWIPELEFTALT }, ...properties);
}

/**
 * Creates a swipe left alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swipeLeftAltIcon = (...properties) => {
    const element = document.createElement('div');
    initSwipeLeftAltIcon(element, ...properties);
    return element;
}
