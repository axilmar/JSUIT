import { initIcon } from "./icon.js";

//the url of the delete forever outlined svg; resolved relative to this module
const URL_DELETEFOREVEROUTLINED = new URL('../../assets/icons/deleteForeverOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a delete forever outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deleteForeverOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeleteForeverOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DELETEFOREVEROUTLINED }, ...properties);
}

/**
 * Creates a delete forever outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deleteForeverOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDeleteForeverOutlinedIcon(element, ...properties);
    return element;
}
