import { initIcon } from "./icon.js";

//the url of the airline seat individual suite svg; resolved relative to this module
const URL_AIRLINESEATINDIVIDUALSUITE = new URL('../../assets/icons/airlineSeatIndividualSuite.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline seat individual suite icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineSeatIndividualSuite.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineSeatIndividualSuiteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airlineSeatIndividualSuiteIcon', url: URL_AIRLINESEATINDIVIDUALSUITE }, ...properties);
}

/**
 * Creates an airline seat individual suite icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineSeatIndividualSuiteIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineSeatIndividualSuiteIcon(element, ...properties);
    return element;
}
