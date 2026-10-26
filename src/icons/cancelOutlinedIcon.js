import { initIcon } from "./icon.js";

//the url of the cancel outlined svg; resolved relative to this module
const URL_CANCELOUTLINED = new URL('../../assets/icons/cancelOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cancel outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cancelOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCancelOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CANCELOUTLINED }, ...properties);
}

/**
 * Creates a cancel outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cancelOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCancelOutlinedIcon(element, ...properties);
    return element;
}
