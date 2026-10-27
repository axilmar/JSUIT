import { initIcon } from "./icon.js";

//the url of the css outlined svg; resolved relative to this module
const URL_CSSOUTLINED = new URL('../../assets/icons/cssOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a css outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cssOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCssOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cssOutlinedIcon', url: URL_CSSOUTLINED }, ...properties);
}

/**
 * Creates a css outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cssOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCssOutlinedIcon(element, ...properties);
    return element;
}
