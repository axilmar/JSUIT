import { initIcon } from "./icon.js";

//the url of the trip origin outlined svg; resolved relative to this module
const URL_TRIPORIGINOUTLINED = new URL('../../assets/icons/tripOriginOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a trip origin outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tripOriginOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTripOriginOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TRIPORIGINOUTLINED }, ...properties);
}

/**
 * Creates a trip origin outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tripOriginOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTripOriginOutlinedIcon(element, ...properties);
    return element;
}
