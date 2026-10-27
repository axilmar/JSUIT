import { initIcon } from "./icon.js";

//the url of the account tree svg; resolved relative to this module
const URL_ACCOUNTTREE = new URL('../../assets/icons/accountTree.svg', import.meta.url).href;

/**
 * Initializes an icon element as an account tree icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accountTree.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccountTreeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'accountTreeIcon', url: URL_ACCOUNTTREE }, ...properties);
}

/**
 * Creates an account tree icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accountTreeIcon = (...properties) => {
    const element = document.createElement('div');
    initAccountTreeIcon(element, ...properties);
    return element;
}
