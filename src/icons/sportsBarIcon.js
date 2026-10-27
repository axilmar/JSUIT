import { initIcon } from "./icon.js";

//the url of the sports bar svg; resolved relative to this module
const URL_SPORTSBAR = new URL('../../assets/icons/sportsBar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsBar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsBarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsBarIcon', url: URL_SPORTSBAR }, ...properties);
}

/**
 * Creates a sports bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsBarIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsBarIcon(element, ...properties);
    return element;
}
