import { initIcon } from "./icon.js";

//the url of the star outline svg; resolved relative to this module
const URL_STAROUTLINE = new URL('../../assets/icons/starOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a star outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/starOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStarOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'starOutlineIcon', url: URL_STAROUTLINE }, ...properties);
}

/**
 * Creates a star outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const starOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initStarOutlineIcon(element, ...properties);
    return element;
}
