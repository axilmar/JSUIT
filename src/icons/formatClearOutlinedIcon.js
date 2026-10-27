import { initIcon } from "./icon.js";

//the url of the format clear outlined svg; resolved relative to this module
const URL_FORMATCLEAROUTLINED = new URL('../../assets/icons/formatClearOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format clear outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatClearOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatClearOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatClearOutlinedIcon', url: URL_FORMATCLEAROUTLINED }, ...properties);
}

/**
 * Creates a format clear outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatClearOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatClearOutlinedIcon(element, ...properties);
    return element;
}
