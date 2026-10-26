import { initIcon } from "./icon.js";

//the url of the sports tennis svg; resolved relative to this module
const URL_SPORTSTENNIS = new URL('../../assets/icons/sportsTennis.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports tennis icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsTennis.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsTennisIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSTENNIS }, ...properties);
}

/**
 * Creates a sports tennis icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsTennisIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsTennisIcon(element, ...properties);
    return element;
}
