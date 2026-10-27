import { initIcon } from "./icon.js";

//the url of the blur off svg; resolved relative to this module
const URL_BLUROFF = new URL('../../assets/icons/blurOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a blur off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/blurOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBlurOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'blurOffIcon', url: URL_BLUROFF }, ...properties);
}

/**
 * Creates a blur off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const blurOffIcon = (...properties) => {
    const element = document.createElement('div');
    initBlurOffIcon(element, ...properties);
    return element;
}
