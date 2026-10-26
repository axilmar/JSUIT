import { initIcon } from "./icon.js";

//the url of the sports volleyball svg; resolved relative to this module
const URL_SPORTSVOLLEYBALL = new URL('../../assets/icons/sportsVolleyball.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports volleyball icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsVolleyball.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsVolleyballIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSVOLLEYBALL }, ...properties);
}

/**
 * Creates a sports volleyball icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsVolleyballIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsVolleyballIcon(element, ...properties);
    return element;
}
