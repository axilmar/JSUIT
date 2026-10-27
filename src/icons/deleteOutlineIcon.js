import { initIcon } from "./icon.js";

//the url of the delete outline svg; resolved relative to this module
const URL_DELETEOUTLINE = new URL('../../assets/icons/deleteOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a delete outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deleteOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeleteOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'deleteOutlineIcon', url: URL_DELETEOUTLINE }, ...properties);
}

/**
 * Creates a delete outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deleteOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initDeleteOutlineIcon(element, ...properties);
    return element;
}
