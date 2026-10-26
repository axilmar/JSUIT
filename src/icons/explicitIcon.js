import { initIcon } from "./icon.js";

//the url of the explicit svg; resolved relative to this module
const URL_EXPLICIT = new URL('../../assets/icons/explicit.svg', import.meta.url).href;

/**
 * Initializes an icon element as an explicit icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/explicit.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExplicitIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EXPLICIT }, ...properties);
}

/**
 * Creates an explicit icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const explicitIcon = (...properties) => {
    const element = document.createElement('div');
    initExplicitIcon(element, ...properties);
    return element;
}
