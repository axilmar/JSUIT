import { initIcon } from "./icon.js";

//the url of the woman svg; resolved relative to this module
const URL_WOMAN = new URL('../../assets/icons/woman.svg', import.meta.url).href;

/**
 * Initializes an icon element as a woman icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/woman.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWomanIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'womanIcon', url: URL_WOMAN }, ...properties);
}

/**
 * Creates a woman icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const womanIcon = (...properties) => {
    const element = document.createElement('div');
    initWomanIcon(element, ...properties);
    return element;
}
