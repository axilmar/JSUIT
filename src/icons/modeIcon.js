import { initIcon } from "./icon.js";

//the url of the mode svg; resolved relative to this module
const URL_MODE = new URL('../../assets/icons/mode.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mode icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mode.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initModeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MODE }, ...properties);
}

/**
 * Creates a mode icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const modeIcon = (...properties) => {
    const element = document.createElement('div');
    initModeIcon(element, ...properties);
    return element;
}
