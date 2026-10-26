import { initIcon } from "./icon.js";

//the url of the confirmation number svg; resolved relative to this module
const URL_CONFIRMATIONNUMBER = new URL('../../assets/icons/confirmationNumber.svg', import.meta.url).href;

/**
 * Initializes an icon element as a confirmation number icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/confirmationNumber.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initConfirmationNumberIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONFIRMATIONNUMBER }, ...properties);
}

/**
 * Creates a confirmation number icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const confirmationNumberIcon = (...properties) => {
    const element = document.createElement('div');
    initConfirmationNumberIcon(element, ...properties);
    return element;
}
