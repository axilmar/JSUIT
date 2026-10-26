import { initIcon } from "./icon.js";

//the url of the format paint svg; resolved relative to this module
const URL_FORMATPAINT = new URL('../../assets/icons/formatPaint.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format paint icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatPaint.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatPaintIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATPAINT }, ...properties);
}

/**
 * Creates a format paint icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatPaintIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatPaintIcon(element, ...properties);
    return element;
}
