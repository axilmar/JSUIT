import { initIcon } from "./icon.js";

//the url of the phishing outlined svg; resolved relative to this module
const URL_PHISHINGOUTLINED = new URL('../../assets/icons/phishingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phishing outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phishingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhishingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHISHINGOUTLINED }, ...properties);
}

/**
 * Creates a phishing outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phishingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhishingOutlinedIcon(element, ...properties);
    return element;
}
