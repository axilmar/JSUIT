import { initIcon } from "./icon.js";

//the url of the format align justify svg; resolved relative to this module
const URL_FORMATALIGNJUSTIFY = new URL('../../assets/icons/formatAlignJustify.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format align justify icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatAlignJustify.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatAlignJustifyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatAlignJustifyIcon', url: URL_FORMATALIGNJUSTIFY }, ...properties);
}

/**
 * Creates a format align justify icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatAlignJustifyIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatAlignJustifyIcon(element, ...properties);
    return element;
}
