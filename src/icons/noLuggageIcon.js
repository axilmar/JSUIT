import { initIcon } from "./icon.js";

//the url of the no luggage svg; resolved relative to this module
const URL_NOLUGGAGE = new URL('../../assets/icons/noLuggage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no luggage icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noLuggage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoLuggageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOLUGGAGE }, ...properties);
}

/**
 * Creates a no luggage icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noLuggageIcon = (...properties) => {
    const element = document.createElement('div');
    initNoLuggageIcon(element, ...properties);
    return element;
}
