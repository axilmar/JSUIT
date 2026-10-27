import { initIcon } from "./icon.js";

//the url of the format strikethrough svg; resolved relative to this module
const URL_FORMATSTRIKETHROUGH = new URL('../../assets/icons/formatStrikethrough.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format strikethrough icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatStrikethrough.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatStrikethroughIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatStrikethroughIcon', url: URL_FORMATSTRIKETHROUGH }, ...properties);
}

/**
 * Creates a format strikethrough icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatStrikethroughIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatStrikethroughIcon(element, ...properties);
    return element;
}
