import { initIcon } from "./icon.js";

//the url of the delete svg; resolved relative to this module
const URL_DELETE = new URL('../../assets/icons/delete.svg', import.meta.url).href;

/**
 * Initializes an icon element as a delete icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/delete.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeleteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'deleteIcon', url: URL_DELETE }, ...properties);
}

/**
 * Creates a delete icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deleteIcon = (...properties) => {
    const element = document.createElement('div');
    initDeleteIcon(element, ...properties);
    return element;
}
