import { initIcon } from "./icon.js";

//the url of the assist walker svg; resolved relative to this module
const URL_ASSISTWALKER = new URL('../../assets/icons/assistWalker.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assist walker icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assistWalker.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssistWalkerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ASSISTWALKER }, ...properties);
}

/**
 * Creates an assist walker icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assistWalkerIcon = (...properties) => {
    const element = document.createElement('div');
    initAssistWalkerIcon(element, ...properties);
    return element;
}
