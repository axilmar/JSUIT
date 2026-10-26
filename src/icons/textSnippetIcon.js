import { initIcon } from "./icon.js";

//the url of the text snippet svg; resolved relative to this module
const URL_TEXTSNIPPET = new URL('../../assets/icons/textSnippet.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text snippet icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textSnippet.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextSnippetIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TEXTSNIPPET }, ...properties);
}

/**
 * Creates a text snippet icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textSnippetIcon = (...properties) => {
    const element = document.createElement('div');
    initTextSnippetIcon(element, ...properties);
    return element;
}
