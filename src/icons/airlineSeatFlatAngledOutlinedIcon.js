import { initIcon } from "./icon.js";

//the url of the airline seat flat angled outlined svg; resolved relative to this module
const URL_AIRLINESEATFLATANGLEDOUTLINED = new URL('../../assets/icons/airlineSeatFlatAngledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline seat flat angled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineSeatFlatAngledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineSeatFlatAngledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AIRLINESEATFLATANGLEDOUTLINED }, ...properties);
}

/**
 * Creates an airline seat flat angled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineSeatFlatAngledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineSeatFlatAngledOutlinedIcon(element, ...properties);
    return element;
}
