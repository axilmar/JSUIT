import { initIcon } from "./icon.js";

//the url of the home mini svg; resolved relative to this module
const URL_HOMEMINI = new URL('../../assets/icons/homeMini.svg', import.meta.url).href;

/**
 * Initializes an icon element as a home mini icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/homeMini.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHomeMiniIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HOMEMINI }, ...properties);
}

/**
 * Creates a home mini icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const homeMiniIcon = (...properties) => {
    const element = document.createElement('div');
    initHomeMiniIcon(element, ...properties);
    return element;
}
