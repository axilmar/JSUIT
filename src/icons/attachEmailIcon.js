import { initIcon } from "./icon.js";

//the url of the attach email svg; resolved relative to this module
const URL_ATTACHEMAIL = new URL('../../assets/icons/attachEmail.svg', import.meta.url).href;

/**
 * Initializes an icon element as an attach email icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/attachEmail.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAttachEmailIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'attachEmailIcon', url: URL_ATTACHEMAIL }, ...properties);
}

/**
 * Creates an attach email icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const attachEmailIcon = (...properties) => {
    const element = document.createElement('div');
    initAttachEmailIcon(element, ...properties);
    return element;
}
