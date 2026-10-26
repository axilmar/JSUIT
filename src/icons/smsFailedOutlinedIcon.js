import { initIcon } from "./icon.js";

//the url of the sms failed outlined svg; resolved relative to this module
const URL_SMSFAILEDOUTLINED = new URL('../../assets/icons/smsFailedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sms failed outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/smsFailedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSmsFailedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SMSFAILEDOUTLINED }, ...properties);
}

/**
 * Creates a sms failed outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const smsFailedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSmsFailedOutlinedIcon(element, ...properties);
    return element;
}
