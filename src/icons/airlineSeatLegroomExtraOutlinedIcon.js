import { initIcon } from "./icon.js";

//the url of the airline seat legroom extra outlined svg; resolved relative to this module
const URL_AIRLINESEATLEGROOMEXTRAOUTLINED = new URL('../../assets/icons/airlineSeatLegroomExtraOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline seat legroom extra outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineSeatLegroomExtraOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineSeatLegroomExtraOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airlineSeatLegroomExtraOutlinedIcon', url: URL_AIRLINESEATLEGROOMEXTRAOUTLINED }, ...properties);
}

/**
 * Creates an airline seat legroom extra outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineSeatLegroomExtraOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineSeatLegroomExtraOutlinedIcon(element, ...properties);
    return element;
}
