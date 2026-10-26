import { initIcon } from "./icon.js";

//the url of the north svg; resolved relative to this module
const URL_NORTH = new URL('../../assets/icons/north.svg', import.meta.url).href;

/**
 * Initializes an icon element as a north icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/north.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNorthIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NORTH }, ...properties);
}

/**
 * Creates a north icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const northIcon = (...properties) => {
    const element = document.createElement('div');
    initNorthIcon(element, ...properties);
    return element;
}
