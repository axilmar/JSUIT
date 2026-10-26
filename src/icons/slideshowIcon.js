import { initIcon } from "./icon.js";

//the url of the slideshow svg; resolved relative to this module
const URL_SLIDESHOW = new URL('../../assets/icons/slideshow.svg', import.meta.url).href;

/**
 * Initializes an icon element as a slideshow icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/slideshow.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSlideshowIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SLIDESHOW }, ...properties);
}

/**
 * Creates a slideshow icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const slideshowIcon = (...properties) => {
    const element = document.createElement('div');
    initSlideshowIcon(element, ...properties);
    return element;
}
