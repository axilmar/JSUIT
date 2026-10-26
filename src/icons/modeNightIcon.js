import { initIcon } from "./icon.js";

//the url of the mode night svg; resolved relative to this module
const URL_MODENIGHT = new URL('../../assets/icons/modeNight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mode night icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/modeNight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initModeNightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MODENIGHT }, ...properties);
}

/**
 * Creates a mode night icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const modeNightIcon = (...properties) => {
    const element = document.createElement('div');
    initModeNightIcon(element, ...properties);
    return element;
}
