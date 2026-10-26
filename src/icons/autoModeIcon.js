import { initIcon } from "./icon.js";

//the url of the auto mode svg; resolved relative to this module
const URL_AUTOMODE = new URL('../../assets/icons/autoMode.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto mode icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoMode.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoModeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AUTOMODE }, ...properties);
}

/**
 * Creates an auto mode icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoModeIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoModeIcon(element, ...properties);
    return element;
}
