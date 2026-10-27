import { initIcon } from "./icon.js";

//the url of the shower svg; resolved relative to this module
const URL_SHOWER = new URL('../../assets/icons/shower.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shower icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shower.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShowerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'showerIcon', url: URL_SHOWER }, ...properties);
}

/**
 * Creates a shower icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const showerIcon = (...properties) => {
    const element = document.createElement('div');
    initShowerIcon(element, ...properties);
    return element;
}
