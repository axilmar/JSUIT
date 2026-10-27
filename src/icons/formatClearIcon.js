import { initIcon } from "./icon.js";

//the url of the format clear svg; resolved relative to this module
const URL_FORMATCLEAR = new URL('../../assets/icons/formatClear.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format clear icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatClear.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatClearIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatClearIcon', url: URL_FORMATCLEAR }, ...properties);
}

/**
 * Creates a format clear icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatClearIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatClearIcon(element, ...properties);
    return element;
}
