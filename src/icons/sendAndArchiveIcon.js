import { initIcon } from "./icon.js";

//the url of the send and archive svg; resolved relative to this module
const URL_SENDANDARCHIVE = new URL('../../assets/icons/sendAndArchive.svg', import.meta.url).href;

/**
 * Initializes an icon element as a send and archive icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sendAndArchive.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSendAndArchiveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SENDANDARCHIVE }, ...properties);
}

/**
 * Creates a send and archive icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sendAndArchiveIcon = (...properties) => {
    const element = document.createElement('div');
    initSendAndArchiveIcon(element, ...properties);
    return element;
}
