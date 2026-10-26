import { initIcon } from "./icon.js";

//the url of the sensor occupied outlined svg; resolved relative to this module
const URL_SENSOROCCUPIEDOUTLINED = new URL('../../assets/icons/sensorOccupiedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sensor occupied outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sensorOccupiedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSensorOccupiedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SENSOROCCUPIEDOUTLINED }, ...properties);
}

/**
 * Creates a sensor occupied outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sensorOccupiedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSensorOccupiedOutlinedIcon(element, ...properties);
    return element;
}
