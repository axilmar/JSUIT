import { initIcon } from "./icon.js";

//the url of the looks3 outlined svg; resolved relative to this module
const URL_LOOKS3OUTLINED = new URL('../../assets/icons/looks3Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a looks3 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/looks3Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLooks3OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOOKS3OUTLINED }, ...properties);
}

/**
 * Creates a looks3 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const looks3OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLooks3OutlinedIcon(element, ...properties);
    return element;
}
