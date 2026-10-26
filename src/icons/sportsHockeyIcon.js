import { initIcon } from "./icon.js";

//the url of the sports hockey svg; resolved relative to this module
const URL_SPORTSHOCKEY = new URL('../../assets/icons/sportsHockey.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports hockey icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsHockey.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsHockeyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSHOCKEY }, ...properties);
}

/**
 * Creates a sports hockey icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsHockeyIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsHockeyIcon(element, ...properties);
    return element;
}
