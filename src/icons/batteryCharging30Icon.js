import { initIcon } from "./icon.js";

//the url of the battery charging30 svg; resolved relative to this module
const URL_BATTERYCHARGING30 = new URL('../../assets/icons/batteryCharging30.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery charging30 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryCharging30.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryCharging30Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERYCHARGING30 }, ...properties);
}

/**
 * Creates a battery charging30 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryCharging30Icon = (...properties) => {
    const element = document.createElement('div');
    initBatteryCharging30Icon(element, ...properties);
    return element;
}
