import { initIcon } from "./icon.js";

//the url of the offline bolt svg; resolved relative to this module
const URL_OFFLINEBOLT = new URL('../../assets/icons/offlineBolt.svg', import.meta.url).href;

/**
 * Initializes an icon element as an offline bolt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/offlineBolt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOfflineBoltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'offlineBoltIcon', url: URL_OFFLINEBOLT }, ...properties);
}

/**
 * Creates an offline bolt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const offlineBoltIcon = (...properties) => {
    const element = document.createElement('div');
    initOfflineBoltIcon(element, ...properties);
    return element;
}
