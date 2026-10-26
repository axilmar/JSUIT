import { initIcon } from "./icon.js";

//the url of the sports soccer svg; resolved relative to this module
const URL_SPORTSSOCCER = new URL('../../assets/icons/sportsSoccer.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports soccer icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsSoccer.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsSoccerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSSOCCER }, ...properties);
}

/**
 * Creates a sports soccer icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsSoccerIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsSoccerIcon(element, ...properties);
    return element;
}
