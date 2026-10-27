import { initIcon } from "./icon.js";

//the url of the no sim outlined svg; resolved relative to this module
const URL_NOSIMOUTLINED = new URL('../../assets/icons/noSimOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no sim outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noSimOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoSimOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noSimOutlinedIcon', url: URL_NOSIMOUTLINED }, ...properties);
}

/**
 * Creates a no sim outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noSimOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoSimOutlinedIcon(element, ...properties);
    return element;
}
