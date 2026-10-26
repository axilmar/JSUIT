import { initIcon } from "./icon.js";

//the url of the south america svg; resolved relative to this module
const URL_SOUTHAMERICA = new URL('../../assets/icons/southAmerica.svg', import.meta.url).href;

/**
 * Initializes an icon element as a south america icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/southAmerica.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSouthAmericaIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SOUTHAMERICA }, ...properties);
}

/**
 * Creates a south america icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const southAmericaIcon = (...properties) => {
    const element = document.createElement('div');
    initSouthAmericaIcon(element, ...properties);
    return element;
}
