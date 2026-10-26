import { initIcon } from "./icon.js";

//the url of the loyalty outlined svg; resolved relative to this module
const URL_LOYALTYOUTLINED = new URL('../../assets/icons/loyaltyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a loyalty outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/loyaltyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLoyaltyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOYALTYOUTLINED }, ...properties);
}

/**
 * Creates a loyalty outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const loyaltyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLoyaltyOutlinedIcon(element, ...properties);
    return element;
}
