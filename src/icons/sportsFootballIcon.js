import { initIcon } from "./icon.js";

//the url of the sports football svg; resolved relative to this module
const URL_SPORTSFOOTBALL = new URL('../../assets/icons/sportsFootball.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports football icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsFootball.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsFootballIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsFootballIcon', url: URL_SPORTSFOOTBALL }, ...properties);
}

/**
 * Creates a sports football icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsFootballIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsFootballIcon(element, ...properties);
    return element;
}
