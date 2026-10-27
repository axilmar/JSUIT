import { initIcon } from "./icon.js";

//the url of the sensor occupied svg; resolved relative to this module
const URL_SENSOROCCUPIED = new URL('../../assets/icons/sensorOccupied.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sensor occupied icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sensorOccupied.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSensorOccupiedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sensorOccupiedIcon', url: URL_SENSOROCCUPIED }, ...properties);
}

/**
 * Creates a sensor occupied icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sensorOccupiedIcon = (...properties) => {
    const element = document.createElement('div');
    initSensorOccupiedIcon(element, ...properties);
    return element;
}
