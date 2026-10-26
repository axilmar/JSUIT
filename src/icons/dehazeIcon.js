import { initIcon } from "./icon.js";

//the url of the dehaze svg; resolved relative to this module
const URL_DEHAZE = new URL('../../assets/icons/dehaze.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dehaze icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dehaze.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDehazeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DEHAZE }, ...properties);
}

/**
 * Creates a dehaze icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dehazeIcon = (...properties) => {
    const element = document.createElement('div');
    initDehazeIcon(element, ...properties);
    return element;
}
