import { initIcon } from "./icon.js";

//the url of the edit svg; resolved relative to this module
const URL_EDIT = new URL('../../assets/icons/edit.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/edit.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EDIT }, ...properties);
}

/**
 * Creates an edit icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editIcon = (...properties) => {
    const element = document.createElement('div');
    initEditIcon(element, ...properties);
    return element;
}
