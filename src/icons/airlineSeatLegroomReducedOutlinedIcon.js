import { initIcon } from "./icon.js";

//the url of the airline seat legroom reduced outlined svg; resolved relative to this module
const URL_AIRLINESEATLEGROOMREDUCEDOUTLINED = new URL('../../assets/icons/airlineSeatLegroomReducedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline seat legroom reduced outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineSeatLegroomReducedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineSeatLegroomReducedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airlineSeatLegroomReducedOutlinedIcon', url: URL_AIRLINESEATLEGROOMREDUCEDOUTLINED }, ...properties);
}

/**
 * Creates an airline seat legroom reduced outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineSeatLegroomReducedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineSeatLegroomReducedOutlinedIcon(element, ...properties);
    return element;
}
