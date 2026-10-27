import { initIcon } from "./icon.js";

//the url of the contactless svg; resolved relative to this module
const URL_CONTACTLESS = new URL('../../assets/icons/contactless.svg', import.meta.url).href;

/**
 * Initializes an icon element as a contactless icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contactless.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContactlessIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contactlessIcon', url: URL_CONTACTLESS }, ...properties);
}

/**
 * Creates a contactless icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contactlessIcon = (...properties) => {
    const element = document.createElement('div');
    initContactlessIcon(element, ...properties);
    return element;
}
