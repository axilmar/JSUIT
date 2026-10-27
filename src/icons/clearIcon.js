import { initIcon } from "./icon.js";

//the url of the clear svg; resolved relative to this module
const URL_CLEAR = new URL('../../assets/icons/clear.svg', import.meta.url).href;

/**
 * Initializes an icon element as a clear icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/clear.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initClearIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'clearIcon', url: URL_CLEAR }, ...properties);
}

/**
 * Creates a clear icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const clearIcon = (...properties) => {
    const element = document.createElement('div');
    initClearIcon(element, ...properties);
    return element;
}
