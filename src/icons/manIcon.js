import { initIcon } from "./icon.js";

//the url of the man svg; resolved relative to this module
const URL_MAN = new URL('../../assets/icons/man.svg', import.meta.url).href;

/**
 * Initializes an icon element as a man icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/man.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initManIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MAN }, ...properties);
}

/**
 * Creates a man icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const manIcon = (...properties) => {
    const element = document.createElement('div');
    initManIcon(element, ...properties);
    return element;
}
