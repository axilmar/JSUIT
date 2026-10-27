import { initIcon } from "./icon.js";

//the url of the rounded corner svg; resolved relative to this module
const URL_ROUNDEDCORNER = new URL('../../assets/icons/roundedCorner.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rounded corner icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/roundedCorner.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRoundedCornerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'roundedCornerIcon', url: URL_ROUNDEDCORNER }, ...properties);
}

/**
 * Creates a rounded corner icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const roundedCornerIcon = (...properties) => {
    const element = document.createElement('div');
    initRoundedCornerIcon(element, ...properties);
    return element;
}
