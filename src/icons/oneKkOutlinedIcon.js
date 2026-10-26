import { initIcon } from "./icon.js";

//the url of the one kk outlined svg; resolved relative to this module
const URL_ONEKKOUTLINED = new URL('../../assets/icons/oneKkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an one kk outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/oneKkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOneKkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ONEKKOUTLINED }, ...properties);
}

/**
 * Creates an one kk outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const oneKkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOneKkOutlinedIcon(element, ...properties);
    return element;
}
