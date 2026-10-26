import { initIcon } from "./icon.js";

//the url of the airline seat legroom extra svg; resolved relative to this module
const URL_AIRLINESEATLEGROOMEXTRA = new URL('../../assets/icons/airlineSeatLegroomExtra.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline seat legroom extra icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineSeatLegroomExtra.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineSeatLegroomExtraIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AIRLINESEATLEGROOMEXTRA }, ...properties);
}

/**
 * Creates an airline seat legroom extra icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineSeatLegroomExtraIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineSeatLegroomExtraIcon(element, ...properties);
    return element;
}
