import { initIcon } from "./icon.js";

//the url of the sports golf svg; resolved relative to this module
const URL_SPORTSGOLF = new URL('../../assets/icons/sportsGolf.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports golf icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsGolf.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsGolfIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSGOLF }, ...properties);
}

/**
 * Creates a sports golf icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsGolfIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsGolfIcon(element, ...properties);
    return element;
}
