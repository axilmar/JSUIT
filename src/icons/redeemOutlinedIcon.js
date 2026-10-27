import { initIcon } from "./icon.js";

//the url of the redeem outlined svg; resolved relative to this module
const URL_REDEEMOUTLINED = new URL('../../assets/icons/redeemOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a redeem outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/redeemOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRedeemOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'redeemOutlinedIcon', url: URL_REDEEMOUTLINED }, ...properties);
}

/**
 * Creates a redeem outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const redeemOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRedeemOutlinedIcon(element, ...properties);
    return element;
}
