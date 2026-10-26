import { initIcon } from "./icon.js";

//the url of the hiking svg; resolved relative to this module
const URL_HIKING = new URL('../../assets/icons/hiking.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hiking icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hiking.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHikingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HIKING }, ...properties);
}

/**
 * Creates a hiking icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hikingIcon = (...properties) => {
    const element = document.createElement('div');
    initHikingIcon(element, ...properties);
    return element;
}
