import { initIcon } from "./icon.js";

//the url of the departure board svg; resolved relative to this module
const URL_DEPARTUREBOARD = new URL('../../assets/icons/departureBoard.svg', import.meta.url).href;

/**
 * Initializes an icon element as a departure board icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/departureBoard.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDepartureBoardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DEPARTUREBOARD }, ...properties);
}

/**
 * Creates a departure board icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const departureBoardIcon = (...properties) => {
    const element = document.createElement('div');
    initDepartureBoardIcon(element, ...properties);
    return element;
}
