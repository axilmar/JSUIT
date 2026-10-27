import { initIcon } from "./icon.js";

//the url of the battery charging60 svg; resolved relative to this module
const URL_BATTERYCHARGING60 = new URL('../../assets/icons/batteryCharging60.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery charging60 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryCharging60.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryCharging60Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'batteryCharging60Icon', url: URL_BATTERYCHARGING60 }, ...properties);
}

/**
 * Creates a battery charging60 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryCharging60Icon = (...properties) => {
    const element = document.createElement('div');
    initBatteryCharging60Icon(element, ...properties);
    return element;
}
