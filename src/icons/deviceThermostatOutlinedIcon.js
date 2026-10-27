import { initIcon } from "./icon.js";

//the url of the device thermostat outlined svg; resolved relative to this module
const URL_DEVICETHERMOSTATOUTLINED = new URL('../../assets/icons/deviceThermostatOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a device thermostat outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deviceThermostatOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeviceThermostatOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'deviceThermostatOutlinedIcon', url: URL_DEVICETHERMOSTATOUTLINED }, ...properties);
}

/**
 * Creates a device thermostat outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deviceThermostatOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDeviceThermostatOutlinedIcon(element, ...properties);
    return element;
}
