import { initIcon } from "./icon.js";

//the url of the nature svg; resolved relative to this module
const URL_NATURE = new URL('../../assets/icons/nature.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nature icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nature.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNatureIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NATURE }, ...properties);
}

/**
 * Creates a nature icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const natureIcon = (...properties) => {
    const element = document.createElement('div');
    initNatureIcon(element, ...properties);
    return element;
}
