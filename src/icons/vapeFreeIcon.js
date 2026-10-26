import { initIcon } from "./icon.js";

//the url of the vape free svg; resolved relative to this module
const URL_VAPEFREE = new URL('../../assets/icons/vapeFree.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vape free icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/vapeFree.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVapeFreeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VAPEFREE }, ...properties);
}

/**
 * Creates a vape free icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const vapeFreeIcon = (...properties) => {
    const element = document.createElement('div');
    initVapeFreeIcon(element, ...properties);
    return element;
}
