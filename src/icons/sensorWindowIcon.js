import { initIcon } from "./icon.js";

//the url of the sensor window svg; resolved relative to this module
const URL_SENSORWINDOW = new URL('../../assets/icons/sensorWindow.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sensor window icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sensorWindow.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSensorWindowIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SENSORWINDOW }, ...properties);
}

/**
 * Creates a sensor window icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sensorWindowIcon = (...properties) => {
    const element = document.createElement('div');
    initSensorWindowIcon(element, ...properties);
    return element;
}
