import { initIcon } from "./icon.js";

//the url of the airline seat legroom normal outlined svg; resolved relative to this module
const URL_AIRLINESEATLEGROOMNORMALOUTLINED = new URL('../../assets/icons/airlineSeatLegroomNormalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline seat legroom normal outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineSeatLegroomNormalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineSeatLegroomNormalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airlineSeatLegroomNormalOutlinedIcon', url: URL_AIRLINESEATLEGROOMNORMALOUTLINED }, ...properties);
}

/**
 * Creates an airline seat legroom normal outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineSeatLegroomNormalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineSeatLegroomNormalOutlinedIcon(element, ...properties);
    return element;
}
