import { initIcon } from "./icon.js";

//the url of the browser not supported outlined svg; resolved relative to this module
const URL_BROWSERNOTSUPPORTEDOUTLINED = new URL('../../assets/icons/browserNotSupportedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a browser not supported outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/browserNotSupportedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrowserNotSupportedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BROWSERNOTSUPPORTEDOUTLINED }, ...properties);
}

/**
 * Creates a browser not supported outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const browserNotSupportedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBrowserNotSupportedOutlinedIcon(element, ...properties);
    return element;
}
