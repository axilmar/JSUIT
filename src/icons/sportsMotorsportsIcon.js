import { initIcon } from "./icon.js";

//the url of the sports motorsports svg; resolved relative to this module
const URL_SPORTSMOTORSPORTS = new URL('../../assets/icons/sportsMotorsports.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports motorsports icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsMotorsports.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsMotorsportsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsMotorsportsIcon', url: URL_SPORTSMOTORSPORTS }, ...properties);
}

/**
 * Creates a sports motorsports icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsMotorsportsIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsMotorsportsIcon(element, ...properties);
    return element;
}
