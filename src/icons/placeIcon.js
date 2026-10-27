import { initIcon } from "./icon.js";

//the url of the place svg; resolved relative to this module
const URL_PLACE = new URL('../../assets/icons/place.svg', import.meta.url).href;

/**
 * Initializes an icon element as a place icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/place.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlaceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'placeIcon', url: URL_PLACE }, ...properties);
}

/**
 * Creates a place icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const placeIcon = (...properties) => {
    const element = document.createElement('div');
    initPlaceIcon(element, ...properties);
    return element;
}
