import { initIcon } from "./icon.js";

//the url of the key svg; resolved relative to this module
const URL_KEY = new URL('../../assets/icons/key.svg', import.meta.url).href;

/**
 * Initializes an icon element as a key icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/key.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyIcon', url: URL_KEY }, ...properties);
}

/**
 * Creates a key icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyIcon(element, ...properties);
    return element;
}
