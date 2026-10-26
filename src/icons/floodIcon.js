import { initIcon } from "./icon.js";

//the url of the flood svg; resolved relative to this module
const URL_FLOOD = new URL('../../assets/icons/flood.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flood icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flood.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFloodIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLOOD }, ...properties);
}

/**
 * Creates a flood icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const floodIcon = (...properties) => {
    const element = document.createElement('div');
    initFloodIcon(element, ...properties);
    return element;
}
