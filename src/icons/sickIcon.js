import { initIcon } from "./icon.js";

//the url of the sick svg; resolved relative to this module
const URL_SICK = new URL('../../assets/icons/sick.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sick icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sick.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSickIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sickIcon', url: URL_SICK }, ...properties);
}

/**
 * Creates a sick icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sickIcon = (...properties) => {
    const element = document.createElement('div');
    initSickIcon(element, ...properties);
    return element;
}
