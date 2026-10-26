import { initIcon } from "./icon.js";

//the url of the loyalty svg; resolved relative to this module
const URL_LOYALTY = new URL('../../assets/icons/loyalty.svg', import.meta.url).href;

/**
 * Initializes an icon element as a loyalty icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/loyalty.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLoyaltyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOYALTY }, ...properties);
}

/**
 * Creates a loyalty icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const loyaltyIcon = (...properties) => {
    const element = document.createElement('div');
    initLoyaltyIcon(element, ...properties);
    return element;
}
