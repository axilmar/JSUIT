import { initIcon } from "./icon.js";

//the url of the health and safety svg; resolved relative to this module
const URL_HEALTHANDSAFETY = new URL('../../assets/icons/healthAndSafety.svg', import.meta.url).href;

/**
 * Initializes an icon element as a health and safety icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/healthAndSafety.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHealthAndSafetyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HEALTHANDSAFETY }, ...properties);
}

/**
 * Creates a health and safety icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const healthAndSafetyIcon = (...properties) => {
    const element = document.createElement('div');
    initHealthAndSafetyIcon(element, ...properties);
    return element;
}
