import { initIcon } from "./icon.js";

//the url of the sms svg; resolved relative to this module
const URL_SMS = new URL('../../assets/icons/sms.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sms icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sms.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSmsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SMS }, ...properties);
}

/**
 * Creates a sms icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const smsIcon = (...properties) => {
    const element = document.createElement('div');
    initSmsIcon(element, ...properties);
    return element;
}
