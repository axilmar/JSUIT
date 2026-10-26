import { initIcon } from "./icon.js";

//the url of the manage accounts svg; resolved relative to this module
const URL_MANAGEACCOUNTS = new URL('../../assets/icons/manageAccounts.svg', import.meta.url).href;

/**
 * Initializes an icon element as a manage accounts icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/manageAccounts.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initManageAccountsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MANAGEACCOUNTS }, ...properties);
}

/**
 * Creates a manage accounts icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const manageAccountsIcon = (...properties) => {
    const element = document.createElement('div');
    initManageAccountsIcon(element, ...properties);
    return element;
}
