import { initIcon } from "./icon.js";

//the url of the format color reset svg; resolved relative to this module
const URL_FORMATCOLORRESET = new URL('../../assets/icons/formatColorReset.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format color reset icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatColorReset.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatColorResetIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATCOLORRESET }, ...properties);
}

/**
 * Creates a format color reset icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatColorResetIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatColorResetIcon(element, ...properties);
    return element;
}
