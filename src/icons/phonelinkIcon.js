import { initIcon } from "./icon.js";

//the url of the phonelink svg; resolved relative to this module
const URL_PHONELINK = new URL('../../assets/icons/phonelink.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phonelink icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phonelink.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhonelinkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHONELINK }, ...properties);
}

/**
 * Creates a phonelink icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phonelinkIcon = (...properties) => {
    const element = document.createElement('div');
    initPhonelinkIcon(element, ...properties);
    return element;
}
