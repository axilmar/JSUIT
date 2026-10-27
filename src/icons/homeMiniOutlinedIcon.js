import { initIcon } from "./icon.js";

//the url of the home mini outlined svg; resolved relative to this module
const URL_HOMEMINIOUTLINED = new URL('../../assets/icons/homeMiniOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a home mini outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/homeMiniOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHomeMiniOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'homeMiniOutlinedIcon', url: URL_HOMEMINIOUTLINED }, ...properties);
}

/**
 * Creates a home mini outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const homeMiniOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHomeMiniOutlinedIcon(element, ...properties);
    return element;
}
