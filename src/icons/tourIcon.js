import { initIcon } from "./icon.js";

//the url of the tour svg; resolved relative to this module
const URL_TOUR = new URL('../../assets/icons/tour.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tour icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tour.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTourIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TOUR }, ...properties);
}

/**
 * Creates a tour icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tourIcon = (...properties) => {
    const element = document.createElement('div');
    initTourIcon(element, ...properties);
    return element;
}
