import { initIcon } from "./icon.js";

//the url of the extension svg; resolved relative to this module
const URL_EXTENSION = new URL('../../assets/icons/extension.svg', import.meta.url).href;

/**
 * Initializes an icon element as an extension icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/extension.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExtensionIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EXTENSION }, ...properties);
}

/**
 * Creates an extension icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const extensionIcon = (...properties) => {
    const element = document.createElement('div');
    initExtensionIcon(element, ...properties);
    return element;
}
