import { initIcon } from "./icon.js";

//the url of the star half svg; resolved relative to this module
const URL_STARHALF = new URL('../../assets/icons/starHalf.svg', import.meta.url).href;

/**
 * Initializes an icon element as a star half icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/starHalf.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStarHalfIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STARHALF }, ...properties);
}

/**
 * Creates a star half icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const starHalfIcon = (...properties) => {
    const element = document.createElement('div');
    initStarHalfIcon(element, ...properties);
    return element;
}
