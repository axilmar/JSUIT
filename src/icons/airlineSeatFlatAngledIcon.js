import { initIcon } from "./icon.js";

//the url of the airline seat flat angled svg; resolved relative to this module
const URL_AIRLINESEATFLATANGLED = new URL('../../assets/icons/airlineSeatFlatAngled.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline seat flat angled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineSeatFlatAngled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineSeatFlatAngledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airlineSeatFlatAngledIcon', url: URL_AIRLINESEATFLATANGLED }, ...properties);
}

/**
 * Creates an airline seat flat angled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineSeatFlatAngledIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineSeatFlatAngledIcon(element, ...properties);
    return element;
}
