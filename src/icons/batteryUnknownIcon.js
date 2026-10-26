import { initIcon } from "./icon.js";

//the url of the battery unknown svg; resolved relative to this module
const URL_BATTERYUNKNOWN = new URL('../../assets/icons/batteryUnknown.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery unknown icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryUnknown.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryUnknownIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERYUNKNOWN }, ...properties);
}

/**
 * Creates a battery unknown icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryUnknownIcon = (...properties) => {
    const element = document.createElement('div');
    initBatteryUnknownIcon(element, ...properties);
    return element;
}
