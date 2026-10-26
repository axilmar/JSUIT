import { initIcon } from "./icon.js";

//the url of the blind svg; resolved relative to this module
const URL_BLIND = new URL('../../assets/icons/blind.svg', import.meta.url).href;

/**
 * Initializes an icon element as a blind icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/blind.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBlindIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLIND }, ...properties);
}

/**
 * Creates a blind icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const blindIcon = (...properties) => {
    const element = document.createElement('div');
    initBlindIcon(element, ...properties);
    return element;
}
