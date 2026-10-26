import { initIcon } from "./icon.js";

//the url of the accessible svg; resolved relative to this module
const URL_ACCESSIBLE = new URL('../../assets/icons/accessible.svg', import.meta.url).href;

/**
 * Initializes an icon element as an accessible icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accessible.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccessibleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ACCESSIBLE }, ...properties);
}

/**
 * Creates an accessible icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accessibleIcon = (...properties) => {
    const element = document.createElement('div');
    initAccessibleIcon(element, ...properties);
    return element;
}
