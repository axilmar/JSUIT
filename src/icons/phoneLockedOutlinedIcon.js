import { initIcon } from "./icon.js";

//the url of the phone locked outlined svg; resolved relative to this module
const URL_PHONELOCKEDOUTLINED = new URL('../../assets/icons/phoneLockedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone locked outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneLockedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneLockedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHONELOCKEDOUTLINED }, ...properties);
}

/**
 * Creates a phone locked outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneLockedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneLockedOutlinedIcon(element, ...properties);
    return element;
}
