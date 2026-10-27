import { initIcon } from "./icon.js";

//the url of the phishing svg; resolved relative to this module
const URL_PHISHING = new URL('../../assets/icons/phishing.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phishing icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phishing.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhishingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phishingIcon', url: URL_PHISHING }, ...properties);
}

/**
 * Creates a phishing icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phishingIcon = (...properties) => {
    const element = document.createElement('div');
    initPhishingIcon(element, ...properties);
    return element;
}
