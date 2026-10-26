import { initIcon } from "./icon.js";

//the url of the euro svg; resolved relative to this module
const URL_EURO = new URL('../../assets/icons/euro.svg', import.meta.url).href;

/**
 * Initializes an icon element as an euro icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/euro.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEuroIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EURO }, ...properties);
}

/**
 * Creates an euro icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const euroIcon = (...properties) => {
    const element = document.createElement('div');
    initEuroIcon(element, ...properties);
    return element;
}
