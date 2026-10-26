import { initIcon } from "./icon.js";

//the url of the looks6 outlined svg; resolved relative to this module
const URL_LOOKS6OUTLINED = new URL('../../assets/icons/looks6Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a looks6 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/looks6Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLooks6OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOOKS6OUTLINED }, ...properties);
}

/**
 * Creates a looks6 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const looks6OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLooks6OutlinedIcon(element, ...properties);
    return element;
}
