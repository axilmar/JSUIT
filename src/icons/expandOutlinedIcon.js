import { initIcon } from "./icon.js";

//the url of the expand outlined svg; resolved relative to this module
const URL_EXPANDOUTLINED = new URL('../../assets/icons/expandOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an expand outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/expandOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExpandOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EXPANDOUTLINED }, ...properties);
}

/**
 * Creates an expand outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const expandOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initExpandOutlinedIcon(element, ...properties);
    return element;
}
