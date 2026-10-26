import { initIcon } from "./icon.js";

//the url of the sd card svg; resolved relative to this module
const URL_SDCARD = new URL('../../assets/icons/sdCard.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sd card icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sdCard.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSdCardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SDCARD }, ...properties);
}

/**
 * Creates a sd card icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sdCardIcon = (...properties) => {
    const element = document.createElement('div');
    initSdCardIcon(element, ...properties);
    return element;
}
