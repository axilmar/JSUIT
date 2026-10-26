import { initIcon } from "./icon.js";

//the url of the ramp left svg; resolved relative to this module
const URL_RAMPLEFT = new URL('../../assets/icons/rampLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as a ramp left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rampLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRampLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RAMPLEFT }, ...properties);
}

/**
 * Creates a ramp left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rampLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initRampLeftIcon(element, ...properties);
    return element;
}
