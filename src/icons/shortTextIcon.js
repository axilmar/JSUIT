import { initIcon } from "./icon.js";

//the url of the short text svg; resolved relative to this module
const URL_SHORTTEXT = new URL('../../assets/icons/shortText.svg', import.meta.url).href;

/**
 * Initializes an icon element as a short text icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shortText.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShortTextIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHORTTEXT }, ...properties);
}

/**
 * Creates a short text icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shortTextIcon = (...properties) => {
    const element = document.createElement('div');
    initShortTextIcon(element, ...properties);
    return element;
}
