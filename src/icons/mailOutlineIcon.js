import { initIcon } from "./icon.js";

//the url of the mail outline svg; resolved relative to this module
const URL_MAILOUTLINE = new URL('../../assets/icons/mailOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mail outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mailOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMailOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MAILOUTLINE }, ...properties);
}

/**
 * Creates a mail outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mailOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initMailOutlineIcon(element, ...properties);
    return element;
}
