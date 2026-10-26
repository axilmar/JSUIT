import { initIcon } from "./icon.js";

//the url of the no accounts outlined svg; resolved relative to this module
const URL_NOACCOUNTSOUTLINED = new URL('../../assets/icons/noAccountsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no accounts outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noAccountsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoAccountsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOACCOUNTSOUTLINED }, ...properties);
}

/**
 * Creates a no accounts outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noAccountsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoAccountsOutlinedIcon(element, ...properties);
    return element;
}
