import { initIcon } from "./icon.js";

//the url of the mobile screen share svg; resolved relative to this module
const URL_MOBILESCREENSHARE = new URL('../../assets/icons/mobileScreenShare.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mobile screen share icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mobileScreenShare.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMobileScreenShareIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOBILESCREENSHARE }, ...properties);
}

/**
 * Creates a mobile screen share icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mobileScreenShareIcon = (...properties) => {
    const element = document.createElement('div');
    initMobileScreenShareIcon(element, ...properties);
    return element;
}
