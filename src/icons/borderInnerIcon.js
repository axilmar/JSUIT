import { initIcon } from "./icon.js";

//the url of the border inner svg; resolved relative to this module
const URL_BORDERINNER = new URL('../../assets/icons/borderInner.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border inner icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderInner.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderInnerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BORDERINNER }, ...properties);
}

/**
 * Creates a border inner icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderInnerIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderInnerIcon(element, ...properties);
    return element;
}
