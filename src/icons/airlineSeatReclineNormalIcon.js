import { initIcon } from "./icon.js";

//the url of the airline seat recline normal svg; resolved relative to this module
const URL_AIRLINESEATRECLINENORMAL = new URL('../../assets/icons/airlineSeatReclineNormal.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline seat recline normal icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineSeatReclineNormal.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineSeatReclineNormalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AIRLINESEATRECLINENORMAL }, ...properties);
}

/**
 * Creates an airline seat recline normal icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineSeatReclineNormalIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineSeatReclineNormalIcon(element, ...properties);
    return element;
}
