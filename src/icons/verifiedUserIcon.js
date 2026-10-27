import { initIcon } from "./icon.js";

//the url of the verified user svg; resolved relative to this module
const URL_VERIFIEDUSER = new URL('../../assets/icons/verifiedUser.svg', import.meta.url).href;

/**
 * Initializes an icon element as a verified user icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/verifiedUser.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVerifiedUserIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'verifiedUserIcon', url: URL_VERIFIEDUSER }, ...properties);
}

/**
 * Creates a verified user icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const verifiedUserIcon = (...properties) => {
    const element = document.createElement('div');
    initVerifiedUserIcon(element, ...properties);
    return element;
}
