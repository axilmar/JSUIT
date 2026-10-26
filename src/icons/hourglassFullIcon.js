import { initIcon } from "./icon.js";

//the url of the hourglass full svg; resolved relative to this module
const URL_HOURGLASSFULL = new URL('../../assets/icons/hourglassFull.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hourglass full icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hourglassFull.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHourglassFullIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HOURGLASSFULL }, ...properties);
}

/**
 * Creates a hourglass full icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hourglassFullIcon = (...properties) => {
    const element = document.createElement('div');
    initHourglassFullIcon(element, ...properties);
    return element;
}
