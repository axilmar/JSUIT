import { initIcon } from "./icon.js";

//the url of the blur linear svg; resolved relative to this module
const URL_BLURLINEAR = new URL('../../assets/icons/blurLinear.svg', import.meta.url).href;

/**
 * Initializes an icon element as a blur linear icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/blurLinear.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBlurLinearIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'blurLinearIcon', url: URL_BLURLINEAR }, ...properties);
}

/**
 * Creates a blur linear icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const blurLinearIcon = (...properties) => {
    const element = document.createElement('div');
    initBlurLinearIcon(element, ...properties);
    return element;
}
