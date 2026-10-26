import { initIcon } from "./icon.js";

//the url of the format color fill outlined svg; resolved relative to this module
const URL_FORMATCOLORFILLOUTLINED = new URL('../../assets/icons/formatColorFillOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format color fill outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatColorFillOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatColorFillOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATCOLORFILLOUTLINED }, ...properties);
}

/**
 * Creates a format color fill outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatColorFillOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatColorFillOutlinedIcon(element, ...properties);
    return element;
}
