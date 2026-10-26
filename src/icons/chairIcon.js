import { initIcon } from "./icon.js";

//the url of the chair svg; resolved relative to this module
const URL_CHAIR = new URL('../../assets/icons/chair.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chair icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chair.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChairIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHAIR }, ...properties);
}

/**
 * Creates a chair icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chairIcon = (...properties) => {
    const element = document.createElement('div');
    initChairIcon(element, ...properties);
    return element;
}
