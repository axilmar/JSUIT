import { initIcon } from "./icon.js";

//the url of the bus alert svg; resolved relative to this module
const URL_BUSALERT = new URL('../../assets/icons/busAlert.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bus alert icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/busAlert.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBusAlertIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BUSALERT }, ...properties);
}

/**
 * Creates a bus alert icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const busAlertIcon = (...properties) => {
    const element = document.createElement('div');
    initBusAlertIcon(element, ...properties);
    return element;
}
