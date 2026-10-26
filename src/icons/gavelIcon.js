import { initIcon } from "./icon.js";

//the url of the gavel svg; resolved relative to this module
const URL_GAVEL = new URL('../../assets/icons/gavel.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gavel icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gavel.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGavelIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GAVEL }, ...properties);
}

/**
 * Creates a gavel icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gavelIcon = (...properties) => {
    const element = document.createElement('div');
    initGavelIcon(element, ...properties);
    return element;
}
