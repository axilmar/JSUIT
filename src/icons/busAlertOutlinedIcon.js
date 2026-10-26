import { initIcon } from "./icon.js";

//the url of the bus alert outlined svg; resolved relative to this module
const URL_BUSALERTOUTLINED = new URL('../../assets/icons/busAlertOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bus alert outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/busAlertOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBusAlertOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BUSALERTOUTLINED }, ...properties);
}

/**
 * Creates a bus alert outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const busAlertOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBusAlertOutlinedIcon(element, ...properties);
    return element;
}
