import { initIcon } from "./icon.js";

//the url of the fullscreen svg; resolved relative to this module
const URL_FULLSCREEN = new URL('../../assets/icons/fullscreen.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fullscreen icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fullscreen.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFullscreenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fullscreenIcon', url: URL_FULLSCREEN }, ...properties);
}

/**
 * Creates a fullscreen icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fullscreenIcon = (...properties) => {
    const element = document.createElement('div');
    initFullscreenIcon(element, ...properties);
    return element;
}
