import { initIcon } from "./icon.js";

//the url of the format list numbered svg; resolved relative to this module
const URL_FORMATLISTNUMBERED = new URL('../../assets/icons/formatListNumbered.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format list numbered icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatListNumbered.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatListNumberedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatListNumberedIcon', url: URL_FORMATLISTNUMBERED }, ...properties);
}

/**
 * Creates a format list numbered icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatListNumberedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatListNumberedIcon(element, ...properties);
    return element;
}
