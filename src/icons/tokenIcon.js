import { initIcon } from "./icon.js";

//the url of the token svg; resolved relative to this module
const URL_TOKEN = new URL('../../assets/icons/token.svg', import.meta.url).href;

/**
 * Initializes an icon element as a token icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/token.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTokenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tokenIcon', url: URL_TOKEN }, ...properties);
}

/**
 * Creates a token icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tokenIcon = (...properties) => {
    const element = document.createElement('div');
    initTokenIcon(element, ...properties);
    return element;
}
