import { initIcon } from "./icon.js";

//the url of the format list numbered rtl svg; resolved relative to this module
const URL_FORMATLISTNUMBEREDRTL = new URL('../../assets/icons/formatListNumberedRtl.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format list numbered rtl icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatListNumberedRtl.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatListNumberedRtlIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatListNumberedRtlIcon', url: URL_FORMATLISTNUMBEREDRTL }, ...properties);
}

/**
 * Creates a format list numbered rtl icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatListNumberedRtlIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatListNumberedRtlIcon(element, ...properties);
    return element;
}
