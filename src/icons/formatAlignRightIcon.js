import { initIcon } from "./icon.js";

//the url of the format align right svg; resolved relative to this module
const URL_FORMATALIGNRIGHT = new URL('../../assets/icons/formatAlignRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format align right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatAlignRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatAlignRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATALIGNRIGHT }, ...properties);
}

/**
 * Creates a format align right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatAlignRightIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatAlignRightIcon(element, ...properties);
    return element;
}
