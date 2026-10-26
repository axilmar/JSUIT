import { initIcon } from "./icon.js";

//the url of the solar power svg; resolved relative to this module
const URL_SOLARPOWER = new URL('../../assets/icons/solarPower.svg', import.meta.url).href;

/**
 * Initializes an icon element as a solar power icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/solarPower.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSolarPowerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SOLARPOWER }, ...properties);
}

/**
 * Creates a solar power icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const solarPowerIcon = (...properties) => {
    const element = document.createElement('div');
    initSolarPowerIcon(element, ...properties);
    return element;
}
