import { initIcon } from "./icon.js";

//the url of the delete forever svg; resolved relative to this module
const URL_DELETEFOREVER = new URL('../../assets/icons/deleteForever.svg', import.meta.url).href;

/**
 * Initializes an icon element as a delete forever icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deleteForever.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeleteForeverIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DELETEFOREVER }, ...properties);
}

/**
 * Creates a delete forever icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deleteForeverIcon = (...properties) => {
    const element = document.createElement('div');
    initDeleteForeverIcon(element, ...properties);
    return element;
}
