import { initIcon } from "./icon.js";

//the url of the push pin svg; resolved relative to this module
const URL_PUSHPIN = new URL('../../assets/icons/pushPin.svg', import.meta.url).href;

/**
 * Initializes an icon element as a push pin icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pushPin.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPushPinIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PUSHPIN }, ...properties);
}

/**
 * Creates a push pin icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pushPinIcon = (...properties) => {
    const element = document.createElement('div');
    initPushPinIcon(element, ...properties);
    return element;
}
