import { initIcon } from "./icon.js";

//the url of the brightness auto svg; resolved relative to this module
const URL_BRIGHTNESSAUTO = new URL('../../assets/icons/brightnessAuto.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness auto icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightnessAuto.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightnessAutoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BRIGHTNESSAUTO }, ...properties);
}

/**
 * Creates a brightness auto icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightnessAutoIcon = (...properties) => {
    const element = document.createElement('div');
    initBrightnessAutoIcon(element, ...properties);
    return element;
}
