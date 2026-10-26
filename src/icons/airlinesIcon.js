import { initIcon } from "./icon.js";

//the url of the airlines svg; resolved relative to this module
const URL_AIRLINES = new URL('../../assets/icons/airlines.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airlines icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlines.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlinesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AIRLINES }, ...properties);
}

/**
 * Creates an airlines icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlinesIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlinesIcon(element, ...properties);
    return element;
}
