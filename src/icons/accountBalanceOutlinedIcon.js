import { initIcon } from "./icon.js";

//the url of the account balance outlined svg; resolved relative to this module
const URL_ACCOUNTBALANCEOUTLINED = new URL('../../assets/icons/accountBalanceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an account balance outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accountBalanceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccountBalanceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'accountBalanceOutlinedIcon', url: URL_ACCOUNTBALANCEOUTLINED }, ...properties);
}

/**
 * Creates an account balance outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accountBalanceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAccountBalanceOutlinedIcon(element, ...properties);
    return element;
}
