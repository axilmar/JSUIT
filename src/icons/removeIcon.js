import { initIcon } from "./icon.js";

//the url of the remove svg; resolved relative to this module
const URL_REMOVE = new URL('../../assets/icons/remove.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/remove.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REMOVE }, ...properties);
}

/**
 * Creates a remove icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveIcon(element, ...properties);
    return element;
}
