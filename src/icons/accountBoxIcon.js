import { initIcon } from "./icon.js";

//the url of the account box svg; resolved relative to this module
const URL_ACCOUNTBOX = new URL('../../assets/icons/accountBox.svg', import.meta.url).href;

/**
 * Initializes an icon element as an account box icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accountBox.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccountBoxIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'accountBoxIcon', url: URL_ACCOUNTBOX }, ...properties);
}

/**
 * Creates an account box icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accountBoxIcon = (...properties) => {
    const element = document.createElement('div');
    initAccountBoxIcon(element, ...properties);
    return element;
}
