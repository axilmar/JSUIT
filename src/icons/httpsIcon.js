import { initIcon } from "./icon.js";

//the url of the https svg; resolved relative to this module
const URL_HTTPS = new URL('../../assets/icons/https.svg', import.meta.url).href;

/**
 * Initializes an icon element as a https icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/https.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHttpsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HTTPS }, ...properties);
}

/**
 * Creates a https icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const httpsIcon = (...properties) => {
    const element = document.createElement('div');
    initHttpsIcon(element, ...properties);
    return element;
}
