import { initIcon } from "./icon.js";

//the url of the power off svg; resolved relative to this module
const URL_POWEROFF = new URL('../../assets/icons/powerOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a power off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/powerOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPowerOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_POWEROFF }, ...properties);
}

/**
 * Creates a power off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const powerOffIcon = (...properties) => {
    const element = document.createElement('div');
    initPowerOffIcon(element, ...properties);
    return element;
}
