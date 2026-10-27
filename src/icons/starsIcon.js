import { initIcon } from "./icon.js";

//the url of the stars svg; resolved relative to this module
const URL_STARS = new URL('../../assets/icons/stars.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stars icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stars.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStarsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'starsIcon', url: URL_STARS }, ...properties);
}

/**
 * Creates a stars icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const starsIcon = (...properties) => {
    const element = document.createElement('div');
    initStarsIcon(element, ...properties);
    return element;
}
