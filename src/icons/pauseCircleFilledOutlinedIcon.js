import { initIcon } from "./icon.js";

//the url of the pause circle filled outlined svg; resolved relative to this module
const URL_PAUSECIRCLEFILLEDOUTLINED = new URL('../../assets/icons/pauseCircleFilledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pause circle filled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pauseCircleFilledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPauseCircleFilledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PAUSECIRCLEFILLEDOUTLINED }, ...properties);
}

/**
 * Creates a pause circle filled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pauseCircleFilledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPauseCircleFilledOutlinedIcon(element, ...properties);
    return element;
}
