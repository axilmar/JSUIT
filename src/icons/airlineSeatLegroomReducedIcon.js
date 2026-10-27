import { initIcon } from "./icon.js";

//the url of the airline seat legroom reduced svg; resolved relative to this module
const URL_AIRLINESEATLEGROOMREDUCED = new URL('../../assets/icons/airlineSeatLegroomReduced.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline seat legroom reduced icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineSeatLegroomReduced.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineSeatLegroomReducedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airlineSeatLegroomReducedIcon', url: URL_AIRLINESEATLEGROOMREDUCED }, ...properties);
}

/**
 * Creates an airline seat legroom reduced icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineSeatLegroomReducedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineSeatLegroomReducedIcon(element, ...properties);
    return element;
}
