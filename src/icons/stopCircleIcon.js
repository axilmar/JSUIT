import { initIcon } from "./icon.js";

//the url of the stop circle svg; resolved relative to this module
const URL_STOPCIRCLE = new URL('../../assets/icons/stopCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stop circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stopCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStopCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STOPCIRCLE }, ...properties);
}

/**
 * Creates a stop circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stopCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initStopCircleIcon(element, ...properties);
    return element;
}
