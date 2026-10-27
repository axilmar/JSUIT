import { initIcon } from "./icon.js";

//the url of the thermostat svg; resolved relative to this module
const URL_THERMOSTAT = new URL('../../assets/icons/thermostat.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thermostat icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thermostat.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThermostatIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'thermostatIcon', url: URL_THERMOSTAT }, ...properties);
}

/**
 * Creates a thermostat icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thermostatIcon = (...properties) => {
    const element = document.createElement('div');
    initThermostatIcon(element, ...properties);
    return element;
}
