import { initIcon } from "./icon.js";

//the url of the my location svg; resolved relative to this module
const URL_MYLOCATION = new URL('../../assets/icons/myLocation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a my location icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/myLocation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMyLocationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MYLOCATION }, ...properties);
}

/**
 * Creates a my location icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const myLocationIcon = (...properties) => {
    const element = document.createElement('div');
    initMyLocationIcon(element, ...properties);
    return element;
}
