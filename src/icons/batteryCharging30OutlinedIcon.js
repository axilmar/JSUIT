import { initIcon } from "./icon.js";

//the url of the battery charging30 outlined svg; resolved relative to this module
const URL_BATTERYCHARGING30OUTLINED = new URL('../../assets/icons/batteryCharging30Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery charging30 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryCharging30Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryCharging30OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'batteryCharging30OutlinedIcon', url: URL_BATTERYCHARGING30OUTLINED }, ...properties);
}

/**
 * Creates a battery charging30 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryCharging30OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBatteryCharging30OutlinedIcon(element, ...properties);
    return element;
}
