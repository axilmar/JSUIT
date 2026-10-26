import { initIcon } from "./icon.js";

//the url of the storefront outlined svg; resolved relative to this module
const URL_STOREFRONTOUTLINED = new URL('../../assets/icons/storefrontOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a storefront outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/storefrontOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStorefrontOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STOREFRONTOUTLINED }, ...properties);
}

/**
 * Creates a storefront outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const storefrontOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStorefrontOutlinedIcon(element, ...properties);
    return element;
}
