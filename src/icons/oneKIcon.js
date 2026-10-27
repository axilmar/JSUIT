import { initIcon } from "./icon.js";

//the url of the one k svg; resolved relative to this module
const URL_ONEK = new URL('../../assets/icons/oneK.svg', import.meta.url).href;

/**
 * Initializes an icon element as an one k icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/oneK.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOneKIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'oneKIcon', url: URL_ONEK }, ...properties);
}

/**
 * Creates an one k icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const oneKIcon = (...properties) => {
    const element = document.createElement('div');
    initOneKIcon(element, ...properties);
    return element;
}
