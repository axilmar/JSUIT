import { initIcon } from "./icon.js";

//the url of the forward10 outlined svg; resolved relative to this module
const URL_FORWARD10OUTLINED = new URL('../../assets/icons/forward10Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a forward10 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forward10Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForward10OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORWARD10OUTLINED }, ...properties);
}

/**
 * Creates a forward10 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forward10OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initForward10OutlinedIcon(element, ...properties);
    return element;
}
