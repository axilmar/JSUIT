import { initIcon } from "./icon.js";

//the url of the delete outline outlined svg; resolved relative to this module
const URL_DELETEOUTLINEOUTLINED = new URL('../../assets/icons/deleteOutlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a delete outline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deleteOutlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeleteOutlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'deleteOutlineOutlinedIcon', url: URL_DELETEOUTLINEOUTLINED }, ...properties);
}

/**
 * Creates a delete outline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deleteOutlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDeleteOutlineOutlinedIcon(element, ...properties);
    return element;
}
