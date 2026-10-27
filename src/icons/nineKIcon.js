import { initIcon } from "./icon.js";

//the url of the nine k svg; resolved relative to this module
const URL_NINEK = new URL('../../assets/icons/nineK.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nine k icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nineK.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNineKIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nineKIcon', url: URL_NINEK }, ...properties);
}

/**
 * Creates a nine k icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nineKIcon = (...properties) => {
    const element = document.createElement('div');
    initNineKIcon(element, ...properties);
    return element;
}
