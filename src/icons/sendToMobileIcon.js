import { initIcon } from "./icon.js";

//the url of the send to mobile svg; resolved relative to this module
const URL_SENDTOMOBILE = new URL('../../assets/icons/sendToMobile.svg', import.meta.url).href;

/**
 * Initializes an icon element as a send to mobile icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sendToMobile.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSendToMobileIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sendToMobileIcon', url: URL_SENDTOMOBILE }, ...properties);
}

/**
 * Creates a send to mobile icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sendToMobileIcon = (...properties) => {
    const element = document.createElement('div');
    initSendToMobileIcon(element, ...properties);
    return element;
}
