import { initIcon } from "./icon.js";

//the url of the fullscreen exit svg; resolved relative to this module
const URL_FULLSCREENEXIT = new URL('../../assets/icons/fullscreenExit.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fullscreen exit icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fullscreenExit.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFullscreenExitIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fullscreenExitIcon', url: URL_FULLSCREENEXIT }, ...properties);
}

/**
 * Creates a fullscreen exit icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fullscreenExitIcon = (...properties) => {
    const element = document.createElement('div');
    initFullscreenExitIcon(element, ...properties);
    return element;
}
