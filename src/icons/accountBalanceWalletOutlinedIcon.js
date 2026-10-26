import { initIcon } from "./icon.js";

//the url of the account balance wallet outlined svg; resolved relative to this module
const URL_ACCOUNTBALANCEWALLETOUTLINED = new URL('../../assets/icons/accountBalanceWalletOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an account balance wallet outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accountBalanceWalletOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccountBalanceWalletOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ACCOUNTBALANCEWALLETOUTLINED }, ...properties);
}

/**
 * Creates an account balance wallet outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accountBalanceWalletOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAccountBalanceWalletOutlinedIcon(element, ...properties);
    return element;
}
