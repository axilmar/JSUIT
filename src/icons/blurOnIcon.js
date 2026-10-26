import { initIcon } from "./icon.js";

//the url of the blur on svg; resolved relative to this module
const URL_BLURON = new URL('../../assets/icons/blurOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a blur on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/blurOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBlurOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLURON }, ...properties);
}

/**
 * Creates a blur on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const blurOnIcon = (...properties) => {
    const element = document.createElement('div');
    initBlurOnIcon(element, ...properties);
    return element;
}
