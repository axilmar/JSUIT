import { initIcon } from "./icon.js";

//the url of the manage accounts outlined svg; resolved relative to this module
const URL_MANAGEACCOUNTSOUTLINED = new URL('../../assets/icons/manageAccountsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a manage accounts outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/manageAccountsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initManageAccountsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'manageAccountsOutlinedIcon', url: URL_MANAGEACCOUNTSOUTLINED }, ...properties);
}

/**
 * Creates a manage accounts outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const manageAccountsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initManageAccountsOutlinedIcon(element, ...properties);
    return element;
}
