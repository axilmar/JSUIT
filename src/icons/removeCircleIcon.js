import { initIcon } from "./icon.js";

//the url of the remove circle svg; resolved relative to this module
const URL_REMOVECIRCLE = new URL('../../assets/icons/removeCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/removeCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'removeCircleIcon', url: URL_REMOVECIRCLE }, ...properties);
}

/**
 * Creates a remove circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveCircleIcon(element, ...properties);
    return element;
}
