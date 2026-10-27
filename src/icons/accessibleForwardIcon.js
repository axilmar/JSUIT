import { initIcon } from "./icon.js";

//the url of the accessible forward svg; resolved relative to this module
const URL_ACCESSIBLEFORWARD = new URL('../../assets/icons/accessibleForward.svg', import.meta.url).href;

/**
 * Initializes an icon element as an accessible forward icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accessibleForward.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccessibleForwardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'accessibleForwardIcon', url: URL_ACCESSIBLEFORWARD }, ...properties);
}

/**
 * Creates an accessible forward icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accessibleForwardIcon = (...properties) => {
    const element = document.createElement('div');
    initAccessibleForwardIcon(element, ...properties);
    return element;
}
