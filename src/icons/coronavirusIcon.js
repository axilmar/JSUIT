import { initIcon } from "./icon.js";

//the url of the coronavirus svg; resolved relative to this module
const URL_CORONAVIRUS = new URL('../../assets/icons/coronavirus.svg', import.meta.url).href;

/**
 * Initializes an icon element as a coronavirus icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/coronavirus.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCoronavirusIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CORONAVIRUS }, ...properties);
}

/**
 * Creates a coronavirus icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const coronavirusIcon = (...properties) => {
    const element = document.createElement('div');
    initCoronavirusIcon(element, ...properties);
    return element;
}
