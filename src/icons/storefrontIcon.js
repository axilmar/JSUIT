import { initIcon } from "./icon.js";

//the url of the storefront svg; resolved relative to this module
const URL_STOREFRONT = new URL('../../assets/icons/storefront.svg', import.meta.url).href;

/**
 * Initializes an icon element as a storefront icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/storefront.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStorefrontIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'storefrontIcon', url: URL_STOREFRONT }, ...properties);
}

/**
 * Creates a storefront icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const storefrontIcon = (...properties) => {
    const element = document.createElement('div');
    initStorefrontIcon(element, ...properties);
    return element;
}
