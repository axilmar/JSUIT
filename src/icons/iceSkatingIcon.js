import { initIcon } from "./icon.js";

//the url of the ice skating svg; resolved relative to this module
const URL_ICESKATING = new URL('../../assets/icons/iceSkating.svg', import.meta.url).href;

/**
 * Initializes an icon element as an ice skating icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/iceSkating.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIceSkatingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ICESKATING }, ...properties);
}

/**
 * Creates an ice skating icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const iceSkatingIcon = (...properties) => {
    const element = document.createElement('div');
    initIceSkatingIcon(element, ...properties);
    return element;
}
