import { initIcon } from "./icon.js";

//the url of the person outline svg; resolved relative to this module
const URL_PERSONOUTLINE = new URL('../../assets/icons/personOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'personOutlineIcon', url: URL_PERSONOUTLINE }, ...properties);
}

/**
 * Creates a person outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonOutlineIcon(element, ...properties);
    return element;
}
