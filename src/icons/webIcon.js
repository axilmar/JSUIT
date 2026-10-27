import { initIcon } from "./icon.js";

//the url of the web svg; resolved relative to this module
const URL_WEB = new URL('../../assets/icons/web.svg', import.meta.url).href;

/**
 * Initializes an icon element as a web icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/web.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWebIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'webIcon', url: URL_WEB }, ...properties);
}

/**
 * Creates a web icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const webIcon = (...properties) => {
    const element = document.createElement('div');
    initWebIcon(element, ...properties);
    return element;
}
