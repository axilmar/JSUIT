import { initIcon } from "./icon.js";

//the url of the verified svg; resolved relative to this module
const URL_VERIFIED = new URL('../../assets/icons/verified.svg', import.meta.url).href;

/**
 * Initializes an icon element as a verified icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/verified.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVerifiedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'verifiedIcon', url: URL_VERIFIED }, ...properties);
}

/**
 * Creates a verified icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const verifiedIcon = (...properties) => {
    const element = document.createElement('div');
    initVerifiedIcon(element, ...properties);
    return element;
}
