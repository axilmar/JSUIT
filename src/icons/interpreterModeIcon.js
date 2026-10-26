import { initIcon } from "./icon.js";

//the url of the interpreter mode svg; resolved relative to this module
const URL_INTERPRETERMODE = new URL('../../assets/icons/interpreterMode.svg', import.meta.url).href;

/**
 * Initializes an icon element as an interpreter mode icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/interpreterMode.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInterpreterModeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INTERPRETERMODE }, ...properties);
}

/**
 * Creates an interpreter mode icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const interpreterModeIcon = (...properties) => {
    const element = document.createElement('div');
    initInterpreterModeIcon(element, ...properties);
    return element;
}
