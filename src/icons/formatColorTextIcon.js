import { initIcon } from "./icon.js";

//the url of the format color text svg; resolved relative to this module
const URL_FORMATCOLORTEXT = new URL('../../assets/icons/formatColorText.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format color text icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatColorText.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatColorTextIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATCOLORTEXT }, ...properties);
}

/**
 * Creates a format color text icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatColorTextIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatColorTextIcon(element, ...properties);
    return element;
}
