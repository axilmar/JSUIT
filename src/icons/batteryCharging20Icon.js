import { initIcon } from "./icon.js";

//the url of the battery charging20 svg; resolved relative to this module
const URL_BATTERYCHARGING20 = new URL('../../assets/icons/batteryCharging20.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery charging20 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryCharging20.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryCharging20Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERYCHARGING20 }, ...properties);
}

/**
 * Creates a battery charging20 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryCharging20Icon = (...properties) => {
    const element = document.createElement('div');
    initBatteryCharging20Icon(element, ...properties);
    return element;
}
