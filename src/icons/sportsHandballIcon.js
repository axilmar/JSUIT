import { initIcon } from "./icon.js";

//the url of the sports handball svg; resolved relative to this module
const URL_SPORTSHANDBALL = new URL('../../assets/icons/sportsHandball.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports handball icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsHandball.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsHandballIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSHANDBALL }, ...properties);
}

/**
 * Creates a sports handball icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsHandballIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsHandballIcon(element, ...properties);
    return element;
}
