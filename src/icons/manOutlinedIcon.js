import { initIcon } from "./icon.js";

//the url of the man outlined svg; resolved relative to this module
const URL_MANOUTLINED = new URL('../../assets/icons/manOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a man outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/manOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initManOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'manOutlinedIcon', url: URL_MANOUTLINED }, ...properties);
}

/**
 * Creates a man outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const manOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initManOutlinedIcon(element, ...properties);
    return element;
}
