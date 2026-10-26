import { initIcon } from "./icon.js";

//the url of the create svg; resolved relative to this module
const URL_CREATE = new URL('../../assets/icons/create.svg', import.meta.url).href;

/**
 * Initializes an icon element as a create icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/create.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCreateIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CREATE }, ...properties);
}

/**
 * Creates a create icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const createIcon = (...properties) => {
    const element = document.createElement('div');
    initCreateIcon(element, ...properties);
    return element;
}
