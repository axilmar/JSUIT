import { initIcon } from "./icon.js";

//the url of the man2 outlined svg; resolved relative to this module
const URL_MAN2OUTLINED = new URL('../../assets/icons/man2Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a man2 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/man2Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMan2OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'man2OutlinedIcon', url: URL_MAN2OUTLINED }, ...properties);
}

/**
 * Creates a man2 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const man2OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMan2OutlinedIcon(element, ...properties);
    return element;
}
