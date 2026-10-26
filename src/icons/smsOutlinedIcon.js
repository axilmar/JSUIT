import { initIcon } from "./icon.js";

//the url of the sms outlined svg; resolved relative to this module
const URL_SMSOUTLINED = new URL('../../assets/icons/smsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sms outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/smsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSmsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SMSOUTLINED }, ...properties);
}

/**
 * Creates a sms outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const smsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSmsOutlinedIcon(element, ...properties);
    return element;
}
