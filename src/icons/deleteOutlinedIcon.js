import { initIcon } from "./icon.js";

//the url of the delete outlined svg; resolved relative to this module
const URL_DELETEOUTLINED = new URL('../../assets/icons/deleteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a delete outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deleteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeleteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DELETEOUTLINED }, ...properties);
}

/**
 * Creates a delete outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deleteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDeleteOutlinedIcon(element, ...properties);
    return element;
}
