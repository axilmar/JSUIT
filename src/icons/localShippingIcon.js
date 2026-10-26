import { initIcon } from "./icon.js";

//the url of the local shipping svg; resolved relative to this module
const URL_LOCALSHIPPING = new URL('../../assets/icons/localShipping.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local shipping icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localShipping.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalShippingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALSHIPPING }, ...properties);
}

/**
 * Creates a local shipping icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localShippingIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalShippingIcon(element, ...properties);
    return element;
}
