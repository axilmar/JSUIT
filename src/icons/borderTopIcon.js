import { initIcon } from "./icon.js";

//the url of the border top svg; resolved relative to this module
const URL_BORDERTOP = new URL('../../assets/icons/borderTop.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border top icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderTop.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderTopIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BORDERTOP }, ...properties);
}

/**
 * Creates a border top icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderTopIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderTopIcon(element, ...properties);
    return element;
}
