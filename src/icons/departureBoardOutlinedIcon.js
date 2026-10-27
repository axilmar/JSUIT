import { initIcon } from "./icon.js";

//the url of the departure board outlined svg; resolved relative to this module
const URL_DEPARTUREBOARDOUTLINED = new URL('../../assets/icons/departureBoardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a departure board outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/departureBoardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDepartureBoardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'departureBoardOutlinedIcon', url: URL_DEPARTUREBOARDOUTLINED }, ...properties);
}

/**
 * Creates a departure board outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const departureBoardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDepartureBoardOutlinedIcon(element, ...properties);
    return element;
}
