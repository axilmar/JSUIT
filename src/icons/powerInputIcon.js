import { initIcon } from "./icon.js";

//the url of the power input svg; resolved relative to this module
const URL_POWERINPUT = new URL('../../assets/icons/powerInput.svg', import.meta.url).href;

/**
 * Initializes an icon element as a power input icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/powerInput.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPowerInputIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_POWERINPUT }, ...properties);
}

/**
 * Creates a power input icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const powerInputIcon = (...properties) => {
    const element = document.createElement('div');
    initPowerInputIcon(element, ...properties);
    return element;
}
