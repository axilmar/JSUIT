import { initIcon } from "./icon.js";

//the url of the extension off svg; resolved relative to this module
const URL_EXTENSIONOFF = new URL('../../assets/icons/extensionOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as an extension off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/extensionOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExtensionOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'extensionOffIcon', url: URL_EXTENSIONOFF }, ...properties);
}

/**
 * Creates an extension off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const extensionOffIcon = (...properties) => {
    const element = document.createElement('div');
    initExtensionOffIcon(element, ...properties);
    return element;
}
