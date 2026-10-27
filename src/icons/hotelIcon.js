import { initIcon } from "./icon.js";

//the url of the hotel svg; resolved relative to this module
const URL_HOTEL = new URL('../../assets/icons/hotel.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hotel icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hotel.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHotelIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hotelIcon', url: URL_HOTEL }, ...properties);
}

/**
 * Creates a hotel icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hotelIcon = (...properties) => {
    const element = document.createElement('div');
    initHotelIcon(element, ...properties);
    return element;
}
