import { initIcon } from "./icon.js";

//the url of the elderly svg; resolved relative to this module
const URL_ELDERLY = new URL('../../assets/icons/elderly.svg', import.meta.url).href;

/**
 * Initializes an icon element as an elderly icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/elderly.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElderlyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ELDERLY }, ...properties);
}

/**
 * Creates an elderly icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const elderlyIcon = (...properties) => {
    const element = document.createElement('div');
    initElderlyIcon(element, ...properties);
    return element;
}
