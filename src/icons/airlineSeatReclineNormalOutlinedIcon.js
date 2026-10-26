import { initIcon } from "./icon.js";

//the url of the airline seat recline normal outlined svg; resolved relative to this module
const URL_AIRLINESEATRECLINENORMALOUTLINED = new URL('../../assets/icons/airlineSeatReclineNormalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline seat recline normal outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineSeatReclineNormalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineSeatReclineNormalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AIRLINESEATRECLINENORMALOUTLINED }, ...properties);
}

/**
 * Creates an airline seat recline normal outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineSeatReclineNormalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineSeatReclineNormalOutlinedIcon(element, ...properties);
    return element;
}
