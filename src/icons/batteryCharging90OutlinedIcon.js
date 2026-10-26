import { initIcon } from "./icon.js";

//the url of the battery charging90 outlined svg; resolved relative to this module
const URL_BATTERYCHARGING90OUTLINED = new URL('../../assets/icons/batteryCharging90Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery charging90 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryCharging90Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryCharging90OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERYCHARGING90OUTLINED }, ...properties);
}

/**
 * Creates a battery charging90 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryCharging90OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBatteryCharging90OutlinedIcon(element, ...properties);
    return element;
}
