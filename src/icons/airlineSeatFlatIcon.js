import { initIcon } from "./icon.js";

//the url of the airline seat flat svg; resolved relative to this module
const URL_AIRLINESEATFLAT = new URL('../../assets/icons/airlineSeatFlat.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline seat flat icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineSeatFlat.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineSeatFlatIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AIRLINESEATFLAT }, ...properties);
}

/**
 * Creates an airline seat flat icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineSeatFlatIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineSeatFlatIcon(element, ...properties);
    return element;
}
