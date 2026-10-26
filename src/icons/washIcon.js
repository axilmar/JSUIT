import { initIcon } from "./icon.js";

//the url of the wash svg; resolved relative to this module
const URL_WASH = new URL('../../assets/icons/wash.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wash icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wash.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWashIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WASH }, ...properties);
}

/**
 * Creates a wash icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const washIcon = (...properties) => {
    const element = document.createElement('div');
    initWashIcon(element, ...properties);
    return element;
}
