import { initIcon } from "./icon.js";

//the url of the format italic svg; resolved relative to this module
const URL_FORMATITALIC = new URL('../../assets/icons/formatItalic.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format italic icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatItalic.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatItalicIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatItalicIcon', url: URL_FORMATITALIC }, ...properties);
}

/**
 * Creates a format italic icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatItalicIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatItalicIcon(element, ...properties);
    return element;
}
