import { initIcon } from "./icon.js";

//the url of the streetview svg; resolved relative to this module
const URL_STREETVIEW = new URL('../../assets/icons/streetview.svg', import.meta.url).href;

/**
 * Initializes an icon element as a streetview icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/streetview.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStreetviewIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'streetviewIcon', url: URL_STREETVIEW }, ...properties);
}

/**
 * Creates a streetview icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const streetviewIcon = (...properties) => {
    const element = document.createElement('div');
    initStreetviewIcon(element, ...properties);
    return element;
}
