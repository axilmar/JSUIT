import { initIcon } from "./icon.js";

//the url of the nights stay svg; resolved relative to this module
const URL_NIGHTSSTAY = new URL('../../assets/icons/nightsStay.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nights stay icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nightsStay.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNightsStayIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NIGHTSSTAY }, ...properties);
}

/**
 * Creates a nights stay icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nightsStayIcon = (...properties) => {
    const element = document.createElement('div');
    initNightsStayIcon(element, ...properties);
    return element;
}
