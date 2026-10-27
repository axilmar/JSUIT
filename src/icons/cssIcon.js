import { initIcon } from "./icon.js";

//the url of the css svg; resolved relative to this module
const URL_CSS = new URL('../../assets/icons/css.svg', import.meta.url).href;

/**
 * Initializes an icon element as a css icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/css.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCssIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cssIcon', url: URL_CSS }, ...properties);
}

/**
 * Creates a css icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cssIcon = (...properties) => {
    const element = document.createElement('div');
    initCssIcon(element, ...properties);
    return element;
}
