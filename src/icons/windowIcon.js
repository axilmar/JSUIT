import { initIcon } from "./icon.js";

//the url of the window svg; resolved relative to this module
const URL_WINDOW = new URL('../../assets/icons/window.svg', import.meta.url).href;

/**
 * Initializes an icon element as a window icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/window.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWindowIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WINDOW }, ...properties);
}

/**
 * Creates a window icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const windowIcon = (...properties) => {
    const element = document.createElement('div');
    initWindowIcon(element, ...properties);
    return element;
}
