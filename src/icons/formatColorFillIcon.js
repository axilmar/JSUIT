import { initIcon } from "./icon.js";

//the url of the format color fill svg; resolved relative to this module
const URL_FORMATCOLORFILL = new URL('../../assets/icons/formatColorFill.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format color fill icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatColorFill.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatColorFillIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatColorFillIcon', url: URL_FORMATCOLORFILL }, ...properties);
}

/**
 * Creates a format color fill icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatColorFillIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatColorFillIcon(element, ...properties);
    return element;
}
