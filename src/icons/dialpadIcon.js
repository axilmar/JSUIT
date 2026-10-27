import { initIcon } from "./icon.js";

//the url of the dialpad svg; resolved relative to this module
const URL_DIALPAD = new URL('../../assets/icons/dialpad.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dialpad icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dialpad.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDialpadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dialpadIcon', url: URL_DIALPAD }, ...properties);
}

/**
 * Creates a dialpad icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dialpadIcon = (...properties) => {
    const element = document.createElement('div');
    initDialpadIcon(element, ...properties);
    return element;
}
