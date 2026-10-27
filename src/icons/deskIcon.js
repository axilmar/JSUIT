import { initIcon } from "./icon.js";

//the url of the desk svg; resolved relative to this module
const URL_DESK = new URL('../../assets/icons/desk.svg', import.meta.url).href;

/**
 * Initializes an icon element as a desk icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/desk.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeskIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'deskIcon', url: URL_DESK }, ...properties);
}

/**
 * Creates a desk icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deskIcon = (...properties) => {
    const element = document.createElement('div');
    initDeskIcon(element, ...properties);
    return element;
}
