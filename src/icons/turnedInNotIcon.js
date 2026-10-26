import { initIcon } from "./icon.js";

//the url of the turned in not svg; resolved relative to this module
const URL_TURNEDINNOT = new URL('../../assets/icons/turnedInNot.svg', import.meta.url).href;

/**
 * Initializes an icon element as a turned in not icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/turnedInNot.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTurnedInNotIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TURNEDINNOT }, ...properties);
}

/**
 * Creates a turned in not icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const turnedInNotIcon = (...properties) => {
    const element = document.createElement('div');
    initTurnedInNotIcon(element, ...properties);
    return element;
}
