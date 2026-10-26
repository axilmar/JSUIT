import { initIcon } from "./icon.js";

//the url of the bathtub svg; resolved relative to this module
const URL_BATHTUB = new URL('../../assets/icons/bathtub.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bathtub icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bathtub.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBathtubIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATHTUB }, ...properties);
}

/**
 * Creates a bathtub icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bathtubIcon = (...properties) => {
    const element = document.createElement('div');
    initBathtubIcon(element, ...properties);
    return element;
}
