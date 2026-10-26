import { initIcon } from "./icon.js";

//the url of the sports cricket svg; resolved relative to this module
const URL_SPORTSCRICKET = new URL('../../assets/icons/sportsCricket.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports cricket icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsCricket.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsCricketIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSCRICKET }, ...properties);
}

/**
 * Creates a sports cricket icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsCricketIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsCricketIcon(element, ...properties);
    return element;
}
