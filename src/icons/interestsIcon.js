import { initIcon } from "./icon.js";

//the url of the interests svg; resolved relative to this module
const URL_INTERESTS = new URL('../../assets/icons/interests.svg', import.meta.url).href;

/**
 * Initializes an icon element as an interests icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/interests.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInterestsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INTERESTS }, ...properties);
}

/**
 * Creates an interests icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const interestsIcon = (...properties) => {
    const element = document.createElement('div');
    initInterestsIcon(element, ...properties);
    return element;
}
