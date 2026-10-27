import { initIcon } from "./icon.js";

//the url of the battery charging80 outlined svg; resolved relative to this module
const URL_BATTERYCHARGING80OUTLINED = new URL('../../assets/icons/batteryCharging80Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery charging80 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryCharging80Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryCharging80OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'batteryCharging80OutlinedIcon', url: URL_BATTERYCHARGING80OUTLINED }, ...properties);
}

/**
 * Creates a battery charging80 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryCharging80OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBatteryCharging80OutlinedIcon(element, ...properties);
    return element;
}
