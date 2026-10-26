import { initIcon } from "./icon.js";

//the url of the mobile screen share outlined svg; resolved relative to this module
const URL_MOBILESCREENSHAREOUTLINED = new URL('../../assets/icons/mobileScreenShareOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mobile screen share outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mobileScreenShareOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMobileScreenShareOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOBILESCREENSHAREOUTLINED }, ...properties);
}

/**
 * Creates a mobile screen share outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mobileScreenShareOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMobileScreenShareOutlinedIcon(element, ...properties);
    return element;
}
