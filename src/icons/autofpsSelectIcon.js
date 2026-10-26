import { initIcon } from "./icon.js";

//the url of the autofps select svg; resolved relative to this module
const URL_AUTOFPSSELECT = new URL('../../assets/icons/autofpsSelect.svg', import.meta.url).href;

/**
 * Initializes an icon element as an autofps select icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autofpsSelect.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutofpsSelectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AUTOFPSSELECT }, ...properties);
}

/**
 * Creates an autofps select icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autofpsSelectIcon = (...properties) => {
    const element = document.createElement('div');
    initAutofpsSelectIcon(element, ...properties);
    return element;
}
