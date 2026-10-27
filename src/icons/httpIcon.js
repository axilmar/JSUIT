import { initIcon } from "./icon.js";

//the url of the http svg; resolved relative to this module
const URL_HTTP = new URL('../../assets/icons/http.svg', import.meta.url).href;

/**
 * Initializes an icon element as a http icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/http.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHttpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'httpIcon', url: URL_HTTP }, ...properties);
}

/**
 * Creates a http icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const httpIcon = (...properties) => {
    const element = document.createElement('div');
    initHttpIcon(element, ...properties);
    return element;
}
