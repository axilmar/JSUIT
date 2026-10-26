import { initIcon } from "./icon.js";

//the url of the double arrow svg; resolved relative to this module
const URL_DOUBLEARROW = new URL('../../assets/icons/doubleArrow.svg', import.meta.url).href;

/**
 * Initializes an icon element as a double arrow icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doubleArrow.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoubleArrowIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOUBLEARROW }, ...properties);
}

/**
 * Creates a double arrow icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doubleArrowIcon = (...properties) => {
    const element = document.createElement('div');
    initDoubleArrowIcon(element, ...properties);
    return element;
}
