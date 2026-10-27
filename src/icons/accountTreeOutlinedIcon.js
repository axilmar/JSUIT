import { initIcon } from "./icon.js";

//the url of the account tree outlined svg; resolved relative to this module
const URL_ACCOUNTTREEOUTLINED = new URL('../../assets/icons/accountTreeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an account tree outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accountTreeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccountTreeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'accountTreeOutlinedIcon', url: URL_ACCOUNTTREEOUTLINED }, ...properties);
}

/**
 * Creates an account tree outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accountTreeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAccountTreeOutlinedIcon(element, ...properties);
    return element;
}
