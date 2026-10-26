import { initIcon } from "./icon.js";

//the url of the local hotel svg; resolved relative to this module
const URL_LOCALHOTEL = new URL('../../assets/icons/localHotel.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local hotel icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localHotel.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalHotelIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALHOTEL }, ...properties);
}

/**
 * Creates a local hotel icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localHotelIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalHotelIcon(element, ...properties);
    return element;
}
