import { initIcon } from "./icon.js";

//the url of the support outlined svg; resolved relative to this module
const URL_SUPPORTOUTLINED = new URL('../../assets/icons/supportOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a support outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/supportOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSupportOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SUPPORTOUTLINED }, ...properties);
}

/**
 * Creates a support outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const supportOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSupportOutlinedIcon(element, ...properties);
    return element;
}
