import { initIcon } from "./icon.js";

//the url of the sensor window outlined svg; resolved relative to this module
const URL_SENSORWINDOWOUTLINED = new URL('../../assets/icons/sensorWindowOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sensor window outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sensorWindowOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSensorWindowOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sensorWindowOutlinedIcon', url: URL_SENSORWINDOWOUTLINED }, ...properties);
}

/**
 * Creates a sensor window outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sensorWindowOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSensorWindowOutlinedIcon(element, ...properties);
    return element;
}
