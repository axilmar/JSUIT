import { initIcon } from "./icon.js";

//the url of the sensor door svg; resolved relative to this module
const URL_SENSORDOOR = new URL('../../assets/icons/sensorDoor.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sensor door icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sensorDoor.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSensorDoorIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sensorDoorIcon', url: URL_SENSORDOOR }, ...properties);
}

/**
 * Creates a sensor door icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sensorDoorIcon = (...properties) => {
    const element = document.createElement('div');
    initSensorDoorIcon(element, ...properties);
    return element;
}
