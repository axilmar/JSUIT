import { initIcon } from "./icon.js";

//the url of the slideshow outlined svg; resolved relative to this module
const URL_SLIDESHOWOUTLINED = new URL('../../assets/icons/slideshowOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a slideshow outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/slideshowOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSlideshowOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'slideshowOutlinedIcon', url: URL_SLIDESHOWOUTLINED }, ...properties);
}

/**
 * Creates a slideshow outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const slideshowOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSlideshowOutlinedIcon(element, ...properties);
    return element;
}
