import { initIcon } from "./icon.js";

//the url of the star border svg; resolved relative to this module
const URL_STARBORDER = new URL('../../assets/icons/starBorder.svg', import.meta.url).href;

/**
 * Initializes an icon element as a star border icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/starBorder.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStarBorderIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'starBorderIcon', url: URL_STARBORDER }, ...properties);
}

/**
 * Creates a star border icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const starBorderIcon = (...properties) => {
    const element = document.createElement('div');
    initStarBorderIcon(element, ...properties);
    return element;
}
