import { initIcon } from "./icon.js";

//the url of the email svg; resolved relative to this module
const URL_EMAIL = new URL('../../assets/icons/email.svg', import.meta.url).href;

/**
 * Initializes an icon element as an email icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/email.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmailIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'emailIcon', url: URL_EMAIL }, ...properties);
}

/**
 * Creates an email icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emailIcon = (...properties) => {
    const element = document.createElement('div');
    initEmailIcon(element, ...properties);
    return element;
}
