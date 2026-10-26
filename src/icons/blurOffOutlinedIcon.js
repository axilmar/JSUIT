import { initIcon } from "./icon.js";

//the url of the blur off outlined svg; resolved relative to this module
const URL_BLUROFFOUTLINED = new URL('../../assets/icons/blurOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a blur off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/blurOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBlurOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLUROFFOUTLINED }, ...properties);
}

/**
 * Creates a blur off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const blurOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBlurOffOutlinedIcon(element, ...properties);
    return element;
}
