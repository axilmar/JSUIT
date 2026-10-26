import { initIcon } from "./icon.js";

//the url of the cake svg; resolved relative to this module
const URL_CAKE = new URL('../../assets/icons/cake.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cake icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cake.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCakeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CAKE }, ...properties);
}

/**
 * Creates a cake icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cakeIcon = (...properties) => {
    const element = document.createElement('div');
    initCakeIcon(element, ...properties);
    return element;
}
