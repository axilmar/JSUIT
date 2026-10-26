import { initIcon } from "./icon.js";

//the url of the hardware svg; resolved relative to this module
const URL_HARDWARE = new URL('../../assets/icons/hardware.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hardware icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hardware.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHardwareIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HARDWARE }, ...properties);
}

/**
 * Creates a hardware icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hardwareIcon = (...properties) => {
    const element = document.createElement('div');
    initHardwareIcon(element, ...properties);
    return element;
}
