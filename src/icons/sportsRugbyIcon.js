import { initIcon } from "./icon.js";

//the url of the sports rugby svg; resolved relative to this module
const URL_SPORTSRUGBY = new URL('../../assets/icons/sportsRugby.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports rugby icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsRugby.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsRugbyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSRUGBY }, ...properties);
}

/**
 * Creates a sports rugby icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsRugbyIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsRugbyIcon(element, ...properties);
    return element;
}
