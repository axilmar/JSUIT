import { initIcon } from "./icon.js";

//the url of the checkroom svg; resolved relative to this module
const URL_CHECKROOM = new URL('../../assets/icons/checkroom.svg', import.meta.url).href;

/**
 * Initializes an icon element as a checkroom icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/checkroom.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCheckroomIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'checkroomIcon', url: URL_CHECKROOM }, ...properties);
}

/**
 * Creates a checkroom icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const checkroomIcon = (...properties) => {
    const element = document.createElement('div');
    initCheckroomIcon(element, ...properties);
    return element;
}
