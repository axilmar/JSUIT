import { initIcon } from "./icon.js";

//the url of the open in browser outlined svg; resolved relative to this module
const URL_OPENINBROWSEROUTLINED = new URL('../../assets/icons/openInBrowserOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an open in browser outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/openInBrowserOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOpenInBrowserOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OPENINBROWSEROUTLINED }, ...properties);
}

/**
 * Creates an open in browser outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const openInBrowserOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOpenInBrowserOutlinedIcon(element, ...properties);
    return element;
}
