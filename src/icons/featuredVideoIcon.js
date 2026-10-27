import { initIcon } from "./icon.js";

//the url of the featured video svg; resolved relative to this module
const URL_FEATUREDVIDEO = new URL('../../assets/icons/featuredVideo.svg', import.meta.url).href;

/**
 * Initializes an icon element as a featured video icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/featuredVideo.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeaturedVideoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'featuredVideoIcon', url: URL_FEATUREDVIDEO }, ...properties);
}

/**
 * Creates a featured video icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const featuredVideoIcon = (...properties) => {
    const element = document.createElement('div');
    initFeaturedVideoIcon(element, ...properties);
    return element;
}
