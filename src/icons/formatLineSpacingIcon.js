import { initIcon } from "./icon.js";

//the url of the format line spacing svg; resolved relative to this module
const URL_FORMATLINESPACING = new URL('../../assets/icons/formatLineSpacing.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format line spacing icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatLineSpacing.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatLineSpacingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATLINESPACING }, ...properties);
}

/**
 * Creates a format line spacing icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatLineSpacingIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatLineSpacingIcon(element, ...properties);
    return element;
}
