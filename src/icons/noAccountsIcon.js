import { initIcon } from "./icon.js";

//the url of the no accounts svg; resolved relative to this module
const URL_NOACCOUNTS = new URL('../../assets/icons/noAccounts.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no accounts icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noAccounts.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoAccountsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOACCOUNTS }, ...properties);
}

/**
 * Creates a no accounts icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noAccountsIcon = (...properties) => {
    const element = document.createElement('div');
    initNoAccountsIcon(element, ...properties);
    return element;
}
