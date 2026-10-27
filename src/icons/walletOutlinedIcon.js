import { initIcon } from "./icon.js";

//the url of the wallet outlined svg; resolved relative to this module
const URL_WALLETOUTLINED = new URL('../../assets/icons/walletOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wallet outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/walletOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWalletOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'walletOutlinedIcon', url: URL_WALLETOUTLINED }, ...properties);
}

/**
 * Creates a wallet outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const walletOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWalletOutlinedIcon(element, ...properties);
    return element;
}
