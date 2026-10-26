import { initIcon } from "./icon.js";

//the url of the hourglass empty svg; resolved relative to this module
const URL_HOURGLASSEMPTY = new URL('../../assets/icons/hourglassEmpty.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hourglass empty icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hourglassEmpty.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHourglassEmptyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HOURGLASSEMPTY }, ...properties);
}

/**
 * Creates a hourglass empty icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hourglassEmptyIcon = (...properties) => {
    const element = document.createElement('div');
    initHourglassEmptyIcon(element, ...properties);
    return element;
}
