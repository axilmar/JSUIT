import { initIcon } from "./icon.js";

//the url of the looks4 outlined svg; resolved relative to this module
const URL_LOOKS4OUTLINED = new URL('../../assets/icons/looks4Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a looks4 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/looks4Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLooks4OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'looks4OutlinedIcon', url: URL_LOOKS4OUTLINED }, ...properties);
}

/**
 * Creates a looks4 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const looks4OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLooks4OutlinedIcon(element, ...properties);
    return element;
}
