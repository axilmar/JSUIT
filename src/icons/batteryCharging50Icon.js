import { initIcon } from "./icon.js";

//the url of the battery charging50 svg; resolved relative to this module
const URL_BATTERYCHARGING50 = new URL('../../assets/icons/batteryCharging50.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery charging50 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryCharging50.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryCharging50Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'batteryCharging50Icon', url: URL_BATTERYCHARGING50 }, ...properties);
}

/**
 * Creates a battery charging50 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryCharging50Icon = (...properties) => {
    const element = document.createElement('div');
    initBatteryCharging50Icon(element, ...properties);
    return element;
}
