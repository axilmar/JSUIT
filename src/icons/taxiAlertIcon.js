import { initIcon } from "./icon.js";

//the url of the taxi alert svg; resolved relative to this module
const URL_TAXIALERT = new URL('../../assets/icons/taxiAlert.svg', import.meta.url).href;

/**
 * Initializes an icon element as a taxi alert icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/taxiAlert.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTaxiAlertIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TAXIALERT }, ...properties);
}

/**
 * Creates a taxi alert icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const taxiAlertIcon = (...properties) => {
    const element = document.createElement('div');
    initTaxiAlertIcon(element, ...properties);
    return element;
}
