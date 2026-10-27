import { initIcon } from "./icon.js";

//the url of the airline seat flat outlined svg; resolved relative to this module
const URL_AIRLINESEATFLATOUTLINED = new URL('../../assets/icons/airlineSeatFlatOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline seat flat outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineSeatFlatOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineSeatFlatOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airlineSeatFlatOutlinedIcon', url: URL_AIRLINESEATFLATOUTLINED }, ...properties);
}

/**
 * Creates an airline seat flat outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineSeatFlatOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineSeatFlatOutlinedIcon(element, ...properties);
    return element;
}
