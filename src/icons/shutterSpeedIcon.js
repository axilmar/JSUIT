import { initIcon } from "./icon.js";

//the url of the shutter speed svg; resolved relative to this module
const URL_SHUTTERSPEED = new URL('../../assets/icons/shutterSpeed.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shutter speed icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shutterSpeed.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShutterSpeedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHUTTERSPEED }, ...properties);
}

/**
 * Creates a shutter speed icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shutterSpeedIcon = (...properties) => {
    const element = document.createElement('div');
    initShutterSpeedIcon(element, ...properties);
    return element;
}
