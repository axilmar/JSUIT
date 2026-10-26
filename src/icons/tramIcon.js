import { initIcon } from "./icon.js";

//the url of the tram svg; resolved relative to this module
const URL_TRAM = new URL('../../assets/icons/tram.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tram icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tram.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTramIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TRAM }, ...properties);
}

/**
 * Creates a tram icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tramIcon = (...properties) => {
    const element = document.createElement('div');
    initTramIcon(element, ...properties);
    return element;
}
