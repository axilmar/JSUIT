import { initIcon } from "./icon.js";

//the url of the style outlined svg; resolved relative to this module
const URL_STYLEOUTLINED = new URL('../../assets/icons/styleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a style outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/styleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStyleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STYLEOUTLINED }, ...properties);
}

/**
 * Creates a style outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const styleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStyleOutlinedIcon(element, ...properties);
    return element;
}
