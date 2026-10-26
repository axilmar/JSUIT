import { initIcon } from "./icon.js";

//the url of the device thermostat svg; resolved relative to this module
const URL_DEVICETHERMOSTAT = new URL('../../assets/icons/deviceThermostat.svg', import.meta.url).href;

/**
 * Initializes an icon element as a device thermostat icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deviceThermostat.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeviceThermostatIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DEVICETHERMOSTAT }, ...properties);
}

/**
 * Creates a device thermostat icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deviceThermostatIcon = (...properties) => {
    const element = document.createElement('div');
    initDeviceThermostatIcon(element, ...properties);
    return element;
}
