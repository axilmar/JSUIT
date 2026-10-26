import { initIcon } from "./icon.js";

//the url of the local airport svg; resolved relative to this module
const URL_LOCALAIRPORT = new URL('../../assets/icons/localAirport.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local airport icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localAirport.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalAirportIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALAIRPORT }, ...properties);
}

/**
 * Creates a local airport icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localAirportIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalAirportIcon(element, ...properties);
    return element;
}
