import { initIcon } from "./icon.js";

//the url of the biotech svg; resolved relative to this module
const URL_BIOTECH = new URL('../../assets/icons/biotech.svg', import.meta.url).href;

/**
 * Initializes an icon element as a biotech icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/biotech.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBiotechIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'biotechIcon', url: URL_BIOTECH }, ...properties);
}

/**
 * Creates a biotech icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const biotechIcon = (...properties) => {
    const element = document.createElement('div');
    initBiotechIcon(element, ...properties);
    return element;
}
