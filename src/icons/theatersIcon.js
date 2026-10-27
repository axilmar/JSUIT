import { initIcon } from "./icon.js";

//the url of the theaters svg; resolved relative to this module
const URL_THEATERS = new URL('../../assets/icons/theaters.svg', import.meta.url).href;

/**
 * Initializes an icon element as a theaters icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/theaters.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTheatersIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'theatersIcon', url: URL_THEATERS }, ...properties);
}

/**
 * Creates a theaters icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const theatersIcon = (...properties) => {
    const element = document.createElement('div');
    initTheatersIcon(element, ...properties);
    return element;
}
