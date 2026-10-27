import { initIcon } from "./icon.js";

//the url of the sensor door outlined svg; resolved relative to this module
const URL_SENSORDOOROUTLINED = new URL('../../assets/icons/sensorDoorOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sensor door outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sensorDoorOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSensorDoorOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sensorDoorOutlinedIcon', url: URL_SENSORDOOROUTLINED }, ...properties);
}

/**
 * Creates a sensor door outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sensorDoorOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSensorDoorOutlinedIcon(element, ...properties);
    return element;
}
