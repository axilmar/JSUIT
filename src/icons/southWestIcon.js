import { initIcon } from "./icon.js";

//the url of the south west svg; resolved relative to this module
const URL_SOUTHWEST = new URL('../../assets/icons/southWest.svg', import.meta.url).href;

/**
 * Initializes an icon element as a south west icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/southWest.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSouthWestIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SOUTHWEST }, ...properties);
}

/**
 * Creates a south west icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const southWestIcon = (...properties) => {
    const element = document.createElement('div');
    initSouthWestIcon(element, ...properties);
    return element;
}
