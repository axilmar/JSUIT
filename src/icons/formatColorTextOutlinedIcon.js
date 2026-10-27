import { initIcon } from "./icon.js";

//the url of the format color text outlined svg; resolved relative to this module
const URL_FORMATCOLORTEXTOUTLINED = new URL('../../assets/icons/formatColorTextOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format color text outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatColorTextOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatColorTextOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatColorTextOutlinedIcon', url: URL_FORMATCOLORTEXTOUTLINED }, ...properties);
}

/**
 * Creates a format color text outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatColorTextOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatColorTextOutlinedIcon(element, ...properties);
    return element;
}
