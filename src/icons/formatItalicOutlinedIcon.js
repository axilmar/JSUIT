import { initIcon } from "./icon.js";

//the url of the format italic outlined svg; resolved relative to this module
const URL_FORMATITALICOUTLINED = new URL('../../assets/icons/formatItalicOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format italic outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatItalicOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatItalicOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatItalicOutlinedIcon', url: URL_FORMATITALICOUTLINED }, ...properties);
}

/**
 * Creates a format italic outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatItalicOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatItalicOutlinedIcon(element, ...properties);
    return element;
}
