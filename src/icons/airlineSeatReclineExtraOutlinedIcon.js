import { initIcon } from "./icon.js";

//the url of the airline seat recline extra outlined svg; resolved relative to this module
const URL_AIRLINESEATRECLINEEXTRAOUTLINED = new URL('../../assets/icons/airlineSeatReclineExtraOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline seat recline extra outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineSeatReclineExtraOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineSeatReclineExtraOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airlineSeatReclineExtraOutlinedIcon', url: URL_AIRLINESEATRECLINEEXTRAOUTLINED }, ...properties);
}

/**
 * Creates an airline seat recline extra outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineSeatReclineExtraOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineSeatReclineExtraOutlinedIcon(element, ...properties);
    return element;
}
