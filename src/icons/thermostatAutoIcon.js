import { initIcon } from "./icon.js";

//the url of the thermostat auto svg; resolved relative to this module
const URL_THERMOSTATAUTO = new URL('../../assets/icons/thermostatAuto.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thermostat auto icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thermostatAuto.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThermostatAutoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THERMOSTATAUTO }, ...properties);
}

/**
 * Creates a thermostat auto icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thermostatAutoIcon = (...properties) => {
    const element = document.createElement('div');
    initThermostatAutoIcon(element, ...properties);
    return element;
}
