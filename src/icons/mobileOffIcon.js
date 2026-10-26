import { initIcon } from "./icon.js";

//the url of the mobile off svg; resolved relative to this module
const URL_MOBILEOFF = new URL('../../assets/icons/mobileOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mobile off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mobileOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMobileOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOBILEOFF }, ...properties);
}

/**
 * Creates a mobile off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mobileOffIcon = (...properties) => {
    const element = document.createElement('div');
    initMobileOffIcon(element, ...properties);
    return element;
}
