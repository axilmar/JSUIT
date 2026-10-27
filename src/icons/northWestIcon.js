import { initIcon } from "./icon.js";

//the url of the north west svg; resolved relative to this module
const URL_NORTHWEST = new URL('../../assets/icons/northWest.svg', import.meta.url).href;

/**
 * Initializes an icon element as a north west icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/northWest.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNorthWestIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'northWestIcon', url: URL_NORTHWEST }, ...properties);
}

/**
 * Creates a north west icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const northWestIcon = (...properties) => {
    const element = document.createElement('div');
    initNorthWestIcon(element, ...properties);
    return element;
}
