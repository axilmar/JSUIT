import { initIcon } from "./icon.js";

//the url of the battery charging60 outlined svg; resolved relative to this module
const URL_BATTERYCHARGING60OUTLINED = new URL('../../assets/icons/batteryCharging60Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery charging60 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryCharging60Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryCharging60OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERYCHARGING60OUTLINED }, ...properties);
}

/**
 * Creates a battery charging60 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryCharging60OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBatteryCharging60OutlinedIcon(element, ...properties);
    return element;
}
