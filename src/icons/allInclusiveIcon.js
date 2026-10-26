import { initIcon } from "./icon.js";

//the url of the all inclusive svg; resolved relative to this module
const URL_ALLINCLUSIVE = new URL('../../assets/icons/allInclusive.svg', import.meta.url).href;

/**
 * Initializes an icon element as an all inclusive icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/allInclusive.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAllInclusiveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ALLINCLUSIVE }, ...properties);
}

/**
 * Creates an all inclusive icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const allInclusiveIcon = (...properties) => {
    const element = document.createElement('div');
    initAllInclusiveIcon(element, ...properties);
    return element;
}
