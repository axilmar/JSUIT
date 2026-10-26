import { initIcon } from "./icon.js";

//the url of the stop svg; resolved relative to this module
const URL_STOP = new URL('../../assets/icons/stop.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stop icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stop.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStopIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STOP }, ...properties);
}

/**
 * Creates a stop icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stopIcon = (...properties) => {
    const element = document.createElement('div');
    initStopIcon(element, ...properties);
    return element;
}
