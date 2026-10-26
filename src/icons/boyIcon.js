import { initIcon } from "./icon.js";

//the url of the boy svg; resolved relative to this module
const URL_BOY = new URL('../../assets/icons/boy.svg', import.meta.url).href;

/**
 * Initializes an icon element as a boy icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/boy.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBoyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BOY }, ...properties);
}

/**
 * Creates a boy icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const boyIcon = (...properties) => {
    const element = document.createElement('div');
    initBoyIcon(element, ...properties);
    return element;
}
