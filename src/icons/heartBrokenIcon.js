import { initIcon } from "./icon.js";

//the url of the heart broken svg; resolved relative to this module
const URL_HEARTBROKEN = new URL('../../assets/icons/heartBroken.svg', import.meta.url).href;

/**
 * Initializes an icon element as a heart broken icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/heartBroken.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHeartBrokenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HEARTBROKEN }, ...properties);
}

/**
 * Creates a heart broken icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const heartBrokenIcon = (...properties) => {
    const element = document.createElement('div');
    initHeartBrokenIcon(element, ...properties);
    return element;
}
