import { initIcon } from "./icon.js";

//the url of the airline seat legroom normal svg; resolved relative to this module
const URL_AIRLINESEATLEGROOMNORMAL = new URL('../../assets/icons/airlineSeatLegroomNormal.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline seat legroom normal icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineSeatLegroomNormal.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineSeatLegroomNormalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airlineSeatLegroomNormalIcon', url: URL_AIRLINESEATLEGROOMNORMAL }, ...properties);
}

/**
 * Creates an airline seat legroom normal icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineSeatLegroomNormalIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineSeatLegroomNormalIcon(element, ...properties);
    return element;
}
