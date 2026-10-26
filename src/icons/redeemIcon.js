import { initIcon } from "./icon.js";

//the url of the redeem svg; resolved relative to this module
const URL_REDEEM = new URL('../../assets/icons/redeem.svg', import.meta.url).href;

/**
 * Initializes an icon element as a redeem icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/redeem.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRedeemIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REDEEM }, ...properties);
}

/**
 * Creates a redeem icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const redeemIcon = (...properties) => {
    const element = document.createElement('div');
    initRedeemIcon(element, ...properties);
    return element;
}
