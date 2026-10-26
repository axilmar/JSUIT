import { initIcon } from "./icon.js";

//the url of the mode fan off svg; resolved relative to this module
const URL_MODEFANOFF = new URL('../../assets/icons/modeFanOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mode fan off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/modeFanOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initModeFanOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MODEFANOFF }, ...properties);
}

/**
 * Creates a mode fan off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const modeFanOffIcon = (...properties) => {
    const element = document.createElement('div');
    initModeFanOffIcon(element, ...properties);
    return element;
}
