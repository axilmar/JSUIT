import { initIcon } from "./icon.js";

//the url of the sms failed svg; resolved relative to this module
const URL_SMSFAILED = new URL('../../assets/icons/smsFailed.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sms failed icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/smsFailed.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSmsFailedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'smsFailedIcon', url: URL_SMSFAILED }, ...properties);
}

/**
 * Creates a sms failed icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const smsFailedIcon = (...properties) => {
    const element = document.createElement('div');
    initSmsFailedIcon(element, ...properties);
    return element;
}
