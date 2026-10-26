import { initIcon } from "./icon.js";

//the url of the mms svg; resolved relative to this module
const URL_MMS = new URL('../../assets/icons/mms.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mms icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mms.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMmsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MMS }, ...properties);
}

/**
 * Creates a mms icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mmsIcon = (...properties) => {
    const element = document.createElement('div');
    initMmsIcon(element, ...properties);
    return element;
}
