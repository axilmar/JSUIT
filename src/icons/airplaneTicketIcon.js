import { initIcon } from "./icon.js";

//the url of the airplane ticket svg; resolved relative to this module
const URL_AIRPLANETICKET = new URL('../../assets/icons/airplaneTicket.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airplane ticket icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airplaneTicket.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirplaneTicketIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airplaneTicketIcon', url: URL_AIRPLANETICKET }, ...properties);
}

/**
 * Creates an airplane ticket icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airplaneTicketIcon = (...properties) => {
    const element = document.createElement('div');
    initAirplaneTicketIcon(element, ...properties);
    return element;
}
