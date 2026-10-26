import { initIcon } from "./icon.js";

//the url of the format textdirection l to r svg; resolved relative to this module
const URL_FORMATTEXTDIRECTIONLTOR = new URL('../../assets/icons/formatTextdirectionLToR.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format textdirection l to r icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatTextdirectionLToR.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatTextdirectionLToRIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATTEXTDIRECTIONLTOR }, ...properties);
}

/**
 * Creates a format textdirection l to r icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatTextdirectionLToRIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatTextdirectionLToRIcon(element, ...properties);
    return element;
}
