import { initIcon } from "./icon.js";

//the url of the man3 outlined svg; resolved relative to this module
const URL_MAN3OUTLINED = new URL('../../assets/icons/man3Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a man3 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/man3Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMan3OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MAN3OUTLINED }, ...properties);
}

/**
 * Creates a man3 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const man3OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMan3OutlinedIcon(element, ...properties);
    return element;
}
