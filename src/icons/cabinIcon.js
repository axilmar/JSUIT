import { initIcon } from "./icon.js";

//the url of the cabin svg; resolved relative to this module
const URL_CABIN = new URL('../../assets/icons/cabin.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cabin icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cabin.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCabinIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cabinIcon', url: URL_CABIN }, ...properties);
}

/**
 * Creates a cabin icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cabinIcon = (...properties) => {
    const element = document.createElement('div');
    initCabinIcon(element, ...properties);
    return element;
}
