import { initIcon } from "./icon.js";

//the url of the send to mobile outlined svg; resolved relative to this module
const URL_SENDTOMOBILEOUTLINED = new URL('../../assets/icons/sendToMobileOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a send to mobile outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sendToMobileOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSendToMobileOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sendToMobileOutlinedIcon', url: URL_SENDTOMOBILEOUTLINED }, ...properties);
}

/**
 * Creates a send to mobile outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sendToMobileOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSendToMobileOutlinedIcon(element, ...properties);
    return element;
}
