import { initIcon } from "./icon.js";

//the url of the ios share svg; resolved relative to this module
const URL_IOSSHARE = new URL('../../assets/icons/iosShare.svg', import.meta.url).href;

/**
 * Initializes an icon element as an ios share icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/iosShare.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIosShareIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_IOSSHARE }, ...properties);
}

/**
 * Creates an ios share icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const iosShareIcon = (...properties) => {
    const element = document.createElement('div');
    initIosShareIcon(element, ...properties);
    return element;
}
