import { initIcon } from "./icon.js";

//the url of the wysiwyg svg; resolved relative to this module
const URL_WYSIWYG = new URL('../../assets/icons/wysiwyg.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wysiwyg icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wysiwyg.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWysiwygIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WYSIWYG }, ...properties);
}

/**
 * Creates a wysiwyg icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wysiwygIcon = (...properties) => {
    const element = document.createElement('div');
    initWysiwygIcon(element, ...properties);
    return element;
}
