import { initIcon } from "./icon.js";

//the url of the devices fold svg; resolved relative to this module
const URL_DEVICESFOLD = new URL('../../assets/icons/devicesFold.svg', import.meta.url).href;

/**
 * Initializes an icon element as a devices fold icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/devicesFold.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDevicesFoldIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DEVICESFOLD }, ...properties);
}

/**
 * Creates a devices fold icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const devicesFoldIcon = (...properties) => {
    const element = document.createElement('div');
    initDevicesFoldIcon(element, ...properties);
    return element;
}
