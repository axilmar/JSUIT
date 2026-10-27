import { initIcon } from "./icon.js";

//the url of the phonelink erase svg; resolved relative to this module
const URL_PHONELINKERASE = new URL('../../assets/icons/phonelinkErase.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phonelink erase icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phonelinkErase.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhonelinkEraseIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phonelinkEraseIcon', url: URL_PHONELINKERASE }, ...properties);
}

/**
 * Creates a phonelink erase icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phonelinkEraseIcon = (...properties) => {
    const element = document.createElement('div');
    initPhonelinkEraseIcon(element, ...properties);
    return element;
}
