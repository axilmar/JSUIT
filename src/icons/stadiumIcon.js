import { initIcon } from "./icon.js";

//the url of the stadium svg; resolved relative to this module
const URL_STADIUM = new URL('../../assets/icons/stadium.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stadium icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stadium.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStadiumIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'stadiumIcon', url: URL_STADIUM }, ...properties);
}

/**
 * Creates a stadium icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stadiumIcon = (...properties) => {
    const element = document.createElement('div');
    initStadiumIcon(element, ...properties);
    return element;
}
