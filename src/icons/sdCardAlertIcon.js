import { initIcon } from "./icon.js";

//the url of the sd card alert svg; resolved relative to this module
const URL_SDCARDALERT = new URL('../../assets/icons/sdCardAlert.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sd card alert icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sdCardAlert.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSdCardAlertIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SDCARDALERT }, ...properties);
}

/**
 * Creates a sd card alert icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sdCardAlertIcon = (...properties) => {
    const element = document.createElement('div');
    initSdCardAlertIcon(element, ...properties);
    return element;
}
