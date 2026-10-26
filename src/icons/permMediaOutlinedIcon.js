import { initIcon } from "./icon.js";

//the url of the perm media outlined svg; resolved relative to this module
const URL_PERMMEDIAOUTLINED = new URL('../../assets/icons/permMediaOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a perm media outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/permMediaOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPermMediaOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERMMEDIAOUTLINED }, ...properties);
}

/**
 * Creates a perm media outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const permMediaOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPermMediaOutlinedIcon(element, ...properties);
    return element;
}
