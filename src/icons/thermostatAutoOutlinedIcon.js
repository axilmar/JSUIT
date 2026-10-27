import { initIcon } from "./icon.js";

//the url of the thermostat auto outlined svg; resolved relative to this module
const URL_THERMOSTATAUTOOUTLINED = new URL('../../assets/icons/thermostatAutoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thermostat auto outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thermostatAutoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThermostatAutoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'thermostatAutoOutlinedIcon', url: URL_THERMOSTATAUTOOUTLINED }, ...properties);
}

/**
 * Creates a thermostat auto outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thermostatAutoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initThermostatAutoOutlinedIcon(element, ...properties);
    return element;
}
