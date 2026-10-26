import { initIcon } from "./icon.js";

//the url of the battery charging20 outlined svg; resolved relative to this module
const URL_BATTERYCHARGING20OUTLINED = new URL('../../assets/icons/batteryCharging20Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery charging20 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryCharging20Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryCharging20OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERYCHARGING20OUTLINED }, ...properties);
}

/**
 * Creates a battery charging20 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryCharging20OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBatteryCharging20OutlinedIcon(element, ...properties);
    return element;
}
