import { initIcon } from "./icon.js";

//the url of the help outline svg; resolved relative to this module
const URL_HELPOUTLINE = new URL('../../assets/icons/helpOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a help outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/helpOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHelpOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HELPOUTLINE }, ...properties);
}

/**
 * Creates a help outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const helpOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initHelpOutlineIcon(element, ...properties);
    return element;
}
