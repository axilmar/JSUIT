import { initIcon } from "./icon.js";

//the url of the battery alert svg; resolved relative to this module
const URL_BATTERYALERT = new URL('../../assets/icons/batteryAlert.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery alert icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryAlert.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryAlertIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'batteryAlertIcon', url: URL_BATTERYALERT }, ...properties);
}

/**
 * Creates a battery alert icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryAlertIcon = (...properties) => {
    const element = document.createElement('div');
    initBatteryAlertIcon(element, ...properties);
    return element;
}
