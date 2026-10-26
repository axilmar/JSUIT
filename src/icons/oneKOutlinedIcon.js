import { initIcon } from "./icon.js";

//the url of the one k outlined svg; resolved relative to this module
const URL_ONEKOUTLINED = new URL('../../assets/icons/oneKOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an one k outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/oneKOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOneKOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ONEKOUTLINED }, ...properties);
}

/**
 * Creates an one k outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const oneKOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOneKOutlinedIcon(element, ...properties);
    return element;
}
