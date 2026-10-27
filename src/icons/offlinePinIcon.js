import { initIcon } from "./icon.js";

//the url of the offline pin svg; resolved relative to this module
const URL_OFFLINEPIN = new URL('../../assets/icons/offlinePin.svg', import.meta.url).href;

/**
 * Initializes an icon element as an offline pin icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/offlinePin.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOfflinePinIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'offlinePinIcon', url: URL_OFFLINEPIN }, ...properties);
}

/**
 * Creates an offline pin icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const offlinePinIcon = (...properties) => {
    const element = document.createElement('div');
    initOfflinePinIcon(element, ...properties);
    return element;
}
