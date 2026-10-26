import { initIcon } from "./icon.js";

//the url of the villa svg; resolved relative to this module
const URL_VILLA = new URL('../../assets/icons/villa.svg', import.meta.url).href;

/**
 * Initializes an icon element as a villa icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/villa.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVillaIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VILLA }, ...properties);
}

/**
 * Creates a villa icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const villaIcon = (...properties) => {
    const element = document.createElement('div');
    initVillaIcon(element, ...properties);
    return element;
}
