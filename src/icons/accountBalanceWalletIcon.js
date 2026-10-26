import { initIcon } from "./icon.js";

//the url of the account balance wallet svg; resolved relative to this module
const URL_ACCOUNTBALANCEWALLET = new URL('../../assets/icons/accountBalanceWallet.svg', import.meta.url).href;

/**
 * Initializes an icon element as an account balance wallet icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accountBalanceWallet.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccountBalanceWalletIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ACCOUNTBALANCEWALLET }, ...properties);
}

/**
 * Creates an account balance wallet icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accountBalanceWalletIcon = (...properties) => {
    const element = document.createElement('div');
    initAccountBalanceWalletIcon(element, ...properties);
    return element;
}
