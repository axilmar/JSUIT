import { initIcon } from "./icon.js";

//the url of the trip origin svg; resolved relative to this module
const URL_TRIPORIGIN = new URL('../../assets/icons/tripOrigin.svg', import.meta.url).href;

/**
 * Initializes an icon element as a trip origin icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tripOrigin.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTripOriginIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tripOriginIcon', url: URL_TRIPORIGIN }, ...properties);
}

/**
 * Creates a trip origin icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tripOriginIcon = (...properties) => {
    const element = document.createElement('div');
    initTripOriginIcon(element, ...properties);
    return element;
}
