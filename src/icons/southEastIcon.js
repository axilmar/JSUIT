import { initIcon } from "./icon.js";

//the url of the south east svg; resolved relative to this module
const URL_SOUTHEAST = new URL('../../assets/icons/southEast.svg', import.meta.url).href;

/**
 * Initializes an icon element as a south east icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/southEast.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSouthEastIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SOUTHEAST }, ...properties);
}

/**
 * Creates a south east icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const southEastIcon = (...properties) => {
    const element = document.createElement('div');
    initSouthEastIcon(element, ...properties);
    return element;
}
