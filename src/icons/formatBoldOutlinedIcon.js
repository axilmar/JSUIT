import { initIcon } from "./icon.js";

//the url of the format bold outlined svg; resolved relative to this module
const URL_FORMATBOLDOUTLINED = new URL('../../assets/icons/formatBoldOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format bold outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatBoldOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatBoldOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATBOLDOUTLINED }, ...properties);
}

/**
 * Creates a format bold outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatBoldOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatBoldOutlinedIcon(element, ...properties);
    return element;
}
