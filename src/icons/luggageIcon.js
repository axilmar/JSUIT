import { initIcon } from "./icon.js";

//the url of the luggage svg; resolved relative to this module
const URL_LUGGAGE = new URL('../../assets/icons/luggage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a luggage icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/luggage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLuggageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LUGGAGE }, ...properties);
}

/**
 * Creates a luggage icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const luggageIcon = (...properties) => {
    const element = document.createElement('div');
    initLuggageIcon(element, ...properties);
    return element;
}
