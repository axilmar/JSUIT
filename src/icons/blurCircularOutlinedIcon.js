import { initIcon } from "./icon.js";

//the url of the blur circular outlined svg; resolved relative to this module
const URL_BLURCIRCULAROUTLINED = new URL('../../assets/icons/blurCircularOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a blur circular outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/blurCircularOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBlurCircularOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLURCIRCULAROUTLINED }, ...properties);
}

/**
 * Creates a blur circular outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const blurCircularOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBlurCircularOutlinedIcon(element, ...properties);
    return element;
}
