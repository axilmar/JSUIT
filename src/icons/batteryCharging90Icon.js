import { initIcon } from "./icon.js";

//the url of the battery charging90 svg; resolved relative to this module
const URL_BATTERYCHARGING90 = new URL('../../assets/icons/batteryCharging90.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery charging90 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryCharging90.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryCharging90Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'batteryCharging90Icon', url: URL_BATTERYCHARGING90 }, ...properties);
}

/**
 * Creates a battery charging90 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryCharging90Icon = (...properties) => {
    const element = document.createElement('div');
    initBatteryCharging90Icon(element, ...properties);
    return element;
}
