import { initIcon } from "./icon.js";

//the url of the format strikethrough outlined svg; resolved relative to this module
const URL_FORMATSTRIKETHROUGHOUTLINED = new URL('../../assets/icons/formatStrikethroughOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format strikethrough outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatStrikethroughOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatStrikethroughOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatStrikethroughOutlinedIcon', url: URL_FORMATSTRIKETHROUGHOUTLINED }, ...properties);
}

/**
 * Creates a format strikethrough outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatStrikethroughOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatStrikethroughOutlinedIcon(element, ...properties);
    return element;
}
