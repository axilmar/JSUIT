import { initIcon } from "./icon.js";

//the url of the extension off outlined svg; resolved relative to this module
const URL_EXTENSIONOFFOUTLINED = new URL('../../assets/icons/extensionOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an extension off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/extensionOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExtensionOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'extensionOffOutlinedIcon', url: URL_EXTENSIONOFFOUTLINED }, ...properties);
}

/**
 * Creates an extension off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const extensionOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initExtensionOffOutlinedIcon(element, ...properties);
    return element;
}
