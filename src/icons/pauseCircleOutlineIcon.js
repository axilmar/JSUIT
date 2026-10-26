import { initIcon } from "./icon.js";

//the url of the pause circle outline svg; resolved relative to this module
const URL_PAUSECIRCLEOUTLINE = new URL('../../assets/icons/pauseCircleOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pause circle outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pauseCircleOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPauseCircleOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PAUSECIRCLEOUTLINE }, ...properties);
}

/**
 * Creates a pause circle outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pauseCircleOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initPauseCircleOutlineIcon(element, ...properties);
    return element;
}
