import { initIcon } from "./icon.js";

//the url of the visibility off svg; resolved relative to this module
const URL_VISIBILITYOFF = new URL('../../assets/icons/visibilityOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a visibility off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/visibilityOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVisibilityOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VISIBILITYOFF }, ...properties);
}

/**
 * Creates a visibility off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const visibilityOffIcon = (...properties) => {
    const element = document.createElement('div');
    initVisibilityOffIcon(element, ...properties);
    return element;
}
