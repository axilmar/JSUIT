import { initIcon } from "./icon.js";

//the url of the star purple500 svg; resolved relative to this module
const URL_STARPURPLE500 = new URL('../../assets/icons/starPurple500.svg', import.meta.url).href;

/**
 * Initializes an icon element as a star purple500 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/starPurple500.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStarPurple500Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STARPURPLE500 }, ...properties);
}

/**
 * Creates a star purple500 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const starPurple500Icon = (...properties) => {
    const element = document.createElement('div');
    initStarPurple500Icon(element, ...properties);
    return element;
}
