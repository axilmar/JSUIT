import { initIcon } from "./icon.js";

//the url of the child friendly svg; resolved relative to this module
const URL_CHILDFRIENDLY = new URL('../../assets/icons/childFriendly.svg', import.meta.url).href;

/**
 * Initializes an icon element as a child friendly icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/childFriendly.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChildFriendlyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHILDFRIENDLY }, ...properties);
}

/**
 * Creates a child friendly icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const childFriendlyIcon = (...properties) => {
    const element = document.createElement('div');
    initChildFriendlyIcon(element, ...properties);
    return element;
}
