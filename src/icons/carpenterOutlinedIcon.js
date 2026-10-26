import { initIcon } from "./icon.js";

//the url of the carpenter outlined svg; resolved relative to this module
const URL_CARPENTEROUTLINED = new URL('../../assets/icons/carpenterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a carpenter outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/carpenterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCarpenterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CARPENTEROUTLINED }, ...properties);
}

/**
 * Creates a carpenter outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const carpenterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCarpenterOutlinedIcon(element, ...properties);
    return element;
}
