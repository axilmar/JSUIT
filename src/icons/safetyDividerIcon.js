import { initIcon } from "./icon.js";

//the url of the safety divider svg; resolved relative to this module
const URL_SAFETYDIVIDER = new URL('../../assets/icons/safetyDivider.svg', import.meta.url).href;

/**
 * Initializes an icon element as a safety divider icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/safetyDivider.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSafetyDividerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SAFETYDIVIDER }, ...properties);
}

/**
 * Creates a safety divider icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const safetyDividerIcon = (...properties) => {
    const element = document.createElement('div');
    initSafetyDividerIcon(element, ...properties);
    return element;
}
