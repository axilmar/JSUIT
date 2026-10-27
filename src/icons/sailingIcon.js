import { initIcon } from "./icon.js";

//the url of the sailing svg; resolved relative to this module
const URL_SAILING = new URL('../../assets/icons/sailing.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sailing icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sailing.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSailingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sailingIcon', url: URL_SAILING }, ...properties);
}

/**
 * Creates a sailing icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sailingIcon = (...properties) => {
    const element = document.createElement('div');
    initSailingIcon(element, ...properties);
    return element;
}
