import { initIcon } from "./icon.js";

//the url of the brightness low svg; resolved relative to this module
const URL_BRIGHTNESSLOW = new URL('../../assets/icons/brightnessLow.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness low icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightnessLow.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightnessLowIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BRIGHTNESSLOW }, ...properties);
}

/**
 * Creates a brightness low icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightnessLowIcon = (...properties) => {
    const element = document.createElement('div');
    initBrightnessLowIcon(element, ...properties);
    return element;
}
