import { initIcon } from "./icon.js";

//the url of the bike scooter svg; resolved relative to this module
const URL_BIKESCOOTER = new URL('../../assets/icons/bikeScooter.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bike scooter icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bikeScooter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBikeScooterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BIKESCOOTER }, ...properties);
}

/**
 * Creates a bike scooter icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bikeScooterIcon = (...properties) => {
    const element = document.createElement('div');
    initBikeScooterIcon(element, ...properties);
    return element;
}
