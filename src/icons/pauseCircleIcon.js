import { initIcon } from "./icon.js";

//the url of the pause circle svg; resolved relative to this module
const URL_PAUSECIRCLE = new URL('../../assets/icons/pauseCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pause circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pauseCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPauseCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pauseCircleIcon', url: URL_PAUSECIRCLE }, ...properties);
}

/**
 * Creates a pause circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pauseCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initPauseCircleIcon(element, ...properties);
    return element;
}
