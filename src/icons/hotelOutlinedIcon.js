import { initIcon } from "./icon.js";

//the url of the hotel outlined svg; resolved relative to this module
const URL_HOTELOUTLINED = new URL('../../assets/icons/hotelOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hotel outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hotelOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHotelOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hotelOutlinedIcon', url: URL_HOTELOUTLINED }, ...properties);
}

/**
 * Creates a hotel outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hotelOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHotelOutlinedIcon(element, ...properties);
    return element;
}
