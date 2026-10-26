import { initIcon } from "./icon.js";

//the url of the open in browser svg; resolved relative to this module
const URL_OPENINBROWSER = new URL('../../assets/icons/openInBrowser.svg', import.meta.url).href;

/**
 * Initializes an icon element as an open in browser icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/openInBrowser.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOpenInBrowserIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OPENINBROWSER }, ...properties);
}

/**
 * Creates an open in browser icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const openInBrowserIcon = (...properties) => {
    const element = document.createElement('div');
    initOpenInBrowserIcon(element, ...properties);
    return element;
}
