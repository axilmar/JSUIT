import { initIcon } from "./icon.js";

//the url of the browser not supported svg; resolved relative to this module
const URL_BROWSERNOTSUPPORTED = new URL('../../assets/icons/browserNotSupported.svg', import.meta.url).href;

/**
 * Initializes an icon element as a browser not supported icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/browserNotSupported.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrowserNotSupportedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BROWSERNOTSUPPORTED }, ...properties);
}

/**
 * Creates a browser not supported icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const browserNotSupportedIcon = (...properties) => {
    const element = document.createElement('div');
    initBrowserNotSupportedIcon(element, ...properties);
    return element;
}
