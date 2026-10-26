import { initIcon } from "./icon.js";

//the url of the autorenew svg; resolved relative to this module
const URL_AUTORENEW = new URL('../../assets/icons/autorenew.svg', import.meta.url).href;

/**
 * Initializes an icon element as an autorenew icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autorenew.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutorenewIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AUTORENEW }, ...properties);
}

/**
 * Creates an autorenew icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autorenewIcon = (...properties) => {
    const element = document.createElement('div');
    initAutorenewIcon(element, ...properties);
    return element;
}
