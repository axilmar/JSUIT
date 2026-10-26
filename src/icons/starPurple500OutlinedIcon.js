import { initIcon } from "./icon.js";

//the url of the star purple500 outlined svg; resolved relative to this module
const URL_STARPURPLE500OUTLINED = new URL('../../assets/icons/starPurple500Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a star purple500 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/starPurple500Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStarPurple500OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STARPURPLE500OUTLINED }, ...properties);
}

/**
 * Creates a star purple500 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const starPurple500OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStarPurple500OutlinedIcon(element, ...properties);
    return element;
}
