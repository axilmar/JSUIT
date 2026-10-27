import { initIcon } from "./icon.js";

//the url of the airline seat individual suite outlined svg; resolved relative to this module
const URL_AIRLINESEATINDIVIDUALSUITEOUTLINED = new URL('../../assets/icons/airlineSeatIndividualSuiteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline seat individual suite outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineSeatIndividualSuiteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineSeatIndividualSuiteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airlineSeatIndividualSuiteOutlinedIcon', url: URL_AIRLINESEATINDIVIDUALSUITEOUTLINED }, ...properties);
}

/**
 * Creates an airline seat individual suite outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineSeatIndividualSuiteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineSeatIndividualSuiteOutlinedIcon(element, ...properties);
    return element;
}
