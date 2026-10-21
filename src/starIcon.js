import { initIcon } from "./icon.js";

//the url of the star svg; resolved relative to this module
const STAR_URL = new URL('../icons/star.svg', import.meta.url).href;

/**
 * Initializes an icon element as a star icon.
 * 
 * It invokes the function `initIcon(element, ...properties)`.
 * 
 * The element displays the svg `icons/star.svg`, MUI's Star; a `url` property overrides it.
 * The star is filled with the current color, or with the `fillColor` of the icon when that is set.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: STAR_URL }, ...properties);
}

/**
 * Creates a star icon.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const starIcon = (...properties) => {
    const element = document.createElement('div');
    initStarIcon(element, ...properties);
    return element;
}
