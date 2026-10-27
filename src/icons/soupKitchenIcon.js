import { initIcon } from "./icon.js";

//the url of the soup kitchen svg; resolved relative to this module
const URL_SOUPKITCHEN = new URL('../../assets/icons/soupKitchen.svg', import.meta.url).href;

/**
 * Initializes an icon element as a soup kitchen icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/soupKitchen.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSoupKitchenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'soupKitchenIcon', url: URL_SOUPKITCHEN }, ...properties);
}

/**
 * Creates a soup kitchen icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const soupKitchenIcon = (...properties) => {
    const element = document.createElement('div');
    initSoupKitchenIcon(element, ...properties);
    return element;
}
