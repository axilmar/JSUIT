import { initIcon } from "./icon.js";

//the url of the water svg; resolved relative to this module
const URL_WATER = new URL('../../assets/icons/water.svg', import.meta.url).href;

/**
 * Initializes an icon element as a water icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/water.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWaterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WATER }, ...properties);
}

/**
 * Creates a water icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const waterIcon = (...properties) => {
    const element = document.createElement('div');
    initWaterIcon(element, ...properties);
    return element;
}
