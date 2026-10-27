import { initIcon } from "./icon.js";

//the url of the looks5 outlined svg; resolved relative to this module
const URL_LOOKS5OUTLINED = new URL('../../assets/icons/looks5Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a looks5 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/looks5Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLooks5OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'looks5OutlinedIcon', url: URL_LOOKS5OUTLINED }, ...properties);
}

/**
 * Creates a looks5 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const looks5OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLooks5OutlinedIcon(element, ...properties);
    return element;
}
