import { initIcon } from "./icon.js";

//the url of the airplane ticket outlined svg; resolved relative to this module
const URL_AIRPLANETICKETOUTLINED = new URL('../../assets/icons/airplaneTicketOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airplane ticket outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airplaneTicketOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirplaneTicketOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airplaneTicketOutlinedIcon', url: URL_AIRPLANETICKETOUTLINED }, ...properties);
}

/**
 * Creates an airplane ticket outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airplaneTicketOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirplaneTicketOutlinedIcon(element, ...properties);
    return element;
}
