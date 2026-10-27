import { initIcon } from "./icon.js";

//the url of the multiple stop svg; resolved relative to this module
const URL_MULTIPLESTOP = new URL('../../assets/icons/multipleStop.svg', import.meta.url).href;

/**
 * Initializes an icon element as a multiple stop icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/multipleStop.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMultipleStopIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'multipleStopIcon', url: URL_MULTIPLESTOP }, ...properties);
}

/**
 * Creates a multiple stop icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const multipleStopIcon = (...properties) => {
    const element = document.createElement('div');
    initMultipleStopIcon(element, ...properties);
    return element;
}
