import { initIcon } from "./icon.js";

//the url of the thermostat outlined svg; resolved relative to this module
const URL_THERMOSTATOUTLINED = new URL('../../assets/icons/thermostatOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thermostat outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thermostatOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThermostatOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THERMOSTATOUTLINED }, ...properties);
}

/**
 * Creates a thermostat outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thermostatOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initThermostatOutlinedIcon(element, ...properties);
    return element;
}
