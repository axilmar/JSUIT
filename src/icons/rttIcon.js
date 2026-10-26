import { initIcon } from "./icon.js";

//the url of the rtt svg; resolved relative to this module
const URL_RTT = new URL('../../assets/icons/rtt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rtt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rtt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRttIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RTT }, ...properties);
}

/**
 * Creates a rtt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rttIcon = (...properties) => {
    const element = document.createElement('div');
    initRttIcon(element, ...properties);
    return element;
}
