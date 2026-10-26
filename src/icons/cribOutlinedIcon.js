import { initIcon } from "./icon.js";

//the url of the crib outlined svg; resolved relative to this module
const URL_CRIBOUTLINED = new URL('../../assets/icons/cribOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crib outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cribOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCribOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CRIBOUTLINED }, ...properties);
}

/**
 * Creates a crib outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cribOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCribOutlinedIcon(element, ...properties);
    return element;
}
