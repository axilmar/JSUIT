import { initIcon } from "./icon.js";

//the url of the airline seat recline extra svg; resolved relative to this module
const URL_AIRLINESEATRECLINEEXTRA = new URL('../../assets/icons/airlineSeatReclineExtra.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline seat recline extra icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineSeatReclineExtra.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineSeatReclineExtraIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airlineSeatReclineExtraIcon', url: URL_AIRLINESEATRECLINEEXTRA }, ...properties);
}

/**
 * Creates an airline seat recline extra icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineSeatReclineExtraIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineSeatReclineExtraIcon(element, ...properties);
    return element;
}
