import { initIcon } from "./icon.js";

//the url of the sip svg; resolved relative to this module
const URL_SIP = new URL('../../assets/icons/sip.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sip icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sip.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSipIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sipIcon', url: URL_SIP }, ...properties);
}

/**
 * Creates a sip icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sipIcon = (...properties) => {
    const element = document.createElement('div');
    initSipIcon(element, ...properties);
    return element;
}
