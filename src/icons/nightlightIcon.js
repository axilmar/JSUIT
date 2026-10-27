import { initIcon } from "./icon.js";

//the url of the nightlight svg; resolved relative to this module
const URL_NIGHTLIGHT = new URL('../../assets/icons/nightlight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nightlight icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nightlight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNightlightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nightlightIcon', url: URL_NIGHTLIGHT }, ...properties);
}

/**
 * Creates a nightlight icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nightlightIcon = (...properties) => {
    const element = document.createElement('div');
    initNightlightIcon(element, ...properties);
    return element;
}
