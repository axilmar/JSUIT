import { initIcon } from "./icon.js";

//the url of the cyclone svg; resolved relative to this module
const URL_CYCLONE = new URL('../../assets/icons/cyclone.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cyclone icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cyclone.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCycloneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CYCLONE }, ...properties);
}

/**
 * Creates a cyclone icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cycloneIcon = (...properties) => {
    const element = document.createElement('div');
    initCycloneIcon(element, ...properties);
    return element;
}
