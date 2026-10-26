import { initIcon } from "./icon.js";

//the url of the phone locked svg; resolved relative to this module
const URL_PHONELOCKED = new URL('../../assets/icons/phoneLocked.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone locked icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneLocked.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneLockedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHONELOCKED }, ...properties);
}

/**
 * Creates a phone locked icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneLockedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneLockedIcon(element, ...properties);
    return element;
}
