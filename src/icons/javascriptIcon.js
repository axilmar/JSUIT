import { initIcon } from "./icon.js";

//the url of the javascript svg; resolved relative to this module
const URL_JAVASCRIPT = new URL('../../assets/icons/javascript.svg', import.meta.url).href;

/**
 * Initializes an icon element as a javascript icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/javascript.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initJavascriptIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'javascriptIcon', url: URL_JAVASCRIPT }, ...properties);
}

/**
 * Creates a javascript icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const javascriptIcon = (...properties) => {
    const element = document.createElement('div');
    initJavascriptIcon(element, ...properties);
    return element;
}
