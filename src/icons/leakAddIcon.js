import { initIcon } from "./icon.js";

//the url of the leak add svg; resolved relative to this module
const URL_LEAKADD = new URL('../../assets/icons/leakAdd.svg', import.meta.url).href;

/**
 * Initializes an icon element as a leak add icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/leakAdd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLeakAddIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LEAKADD }, ...properties);
}

/**
 * Creates a leak add icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const leakAddIcon = (...properties) => {
    const element = document.createElement('div');
    initLeakAddIcon(element, ...properties);
    return element;
}
