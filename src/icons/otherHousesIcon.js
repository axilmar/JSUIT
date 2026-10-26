import { initIcon } from "./icon.js";

//the url of the other houses svg; resolved relative to this module
const URL_OTHERHOUSES = new URL('../../assets/icons/otherHouses.svg', import.meta.url).href;

/**
 * Initializes an icon element as an other houses icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/otherHouses.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOtherHousesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OTHERHOUSES }, ...properties);
}

/**
 * Creates an other houses icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const otherHousesIcon = (...properties) => {
    const element = document.createElement('div');
    initOtherHousesIcon(element, ...properties);
    return element;
}
