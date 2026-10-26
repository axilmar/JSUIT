import { initIcon } from "./icon.js";

//the url of the forward5 outlined svg; resolved relative to this module
const URL_FORWARD5OUTLINED = new URL('../../assets/icons/forward5Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a forward5 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forward5Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForward5OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORWARD5OUTLINED }, ...properties);
}

/**
 * Creates a forward5 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forward5OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initForward5OutlinedIcon(element, ...properties);
    return element;
}
