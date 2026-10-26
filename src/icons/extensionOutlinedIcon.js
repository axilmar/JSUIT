import { initIcon } from "./icon.js";

//the url of the extension outlined svg; resolved relative to this module
const URL_EXTENSIONOUTLINED = new URL('../../assets/icons/extensionOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an extension outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/extensionOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExtensionOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EXTENSIONOUTLINED }, ...properties);
}

/**
 * Creates an extension outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const extensionOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initExtensionOutlinedIcon(element, ...properties);
    return element;
}
