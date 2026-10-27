import { initIcon } from "./icon.js";

//the url of the attractions svg; resolved relative to this module
const URL_ATTRACTIONS = new URL('../../assets/icons/attractions.svg', import.meta.url).href;

/**
 * Initializes an icon element as an attractions icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/attractions.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAttractionsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'attractionsIcon', url: URL_ATTRACTIONS }, ...properties);
}

/**
 * Creates an attractions icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const attractionsIcon = (...properties) => {
    const element = document.createElement('div');
    initAttractionsIcon(element, ...properties);
    return element;
}
