import { initIcon } from "./icon.js";

//the url of the safety check svg; resolved relative to this module
const URL_SAFETYCHECK = new URL('../../assets/icons/safetyCheck.svg', import.meta.url).href;

/**
 * Initializes an icon element as a safety check icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/safetyCheck.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSafetyCheckIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SAFETYCHECK }, ...properties);
}

/**
 * Creates a safety check icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const safetyCheckIcon = (...properties) => {
    const element = document.createElement('div');
    initSafetyCheckIcon(element, ...properties);
    return element;
}
