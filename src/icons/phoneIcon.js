import { initIcon } from "./icon.js";

//the url of the phone svg; resolved relative to this module
const URL_PHONE = new URL('../../assets/icons/phone.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phone.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHONE }, ...properties);
}

/**
 * Creates a phone icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneIcon(element, ...properties);
    return element;
}
