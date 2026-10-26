import { initIcon } from "./icon.js";

//the url of the format list numbered rtl outlined svg; resolved relative to this module
const URL_FORMATLISTNUMBEREDRTLOUTLINED = new URL('../../assets/icons/formatListNumberedRtlOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format list numbered rtl outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatListNumberedRtlOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatListNumberedRtlOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATLISTNUMBEREDRTLOUTLINED }, ...properties);
}

/**
 * Creates a format list numbered rtl outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatListNumberedRtlOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatListNumberedRtlOutlinedIcon(element, ...properties);
    return element;
}
