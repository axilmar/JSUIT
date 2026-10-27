import { initIcon } from "./icon.js";

//the url of the mp svg; resolved relative to this module
const URL_MP = new URL('../../assets/icons/mp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mpIcon', url: URL_MP }, ...properties);
}

/**
 * Creates a mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mpIcon = (...properties) => {
    const element = document.createElement('div');
    initMpIcon(element, ...properties);
    return element;
}
