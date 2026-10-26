import { initIcon } from "./icon.js";

//the url of the wallet svg; resolved relative to this module
const URL_WALLET = new URL('../../assets/icons/wallet.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wallet icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wallet.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWalletIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WALLET }, ...properties);
}

/**
 * Creates a wallet icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const walletIcon = (...properties) => {
    const element = document.createElement('div');
    initWalletIcon(element, ...properties);
    return element;
}
