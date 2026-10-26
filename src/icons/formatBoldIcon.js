import { initIcon } from "./icon.js";

//the url of the format bold svg; resolved relative to this module
const URL_FORMATBOLD = new URL('../../assets/icons/formatBold.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format bold icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatBold.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatBoldIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATBOLD }, ...properties);
}

/**
 * Creates a format bold icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatBoldIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatBoldIcon(element, ...properties);
    return element;
}
