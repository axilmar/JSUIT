import { initIcon } from "./icon.js";

//the url of the mail svg; resolved relative to this module
const URL_MAIL = new URL('../../assets/icons/mail.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mail icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mail.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMailIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MAIL }, ...properties);
}

/**
 * Creates a mail icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mailIcon = (...properties) => {
    const element = document.createElement('div');
    initMailIcon(element, ...properties);
    return element;
}
