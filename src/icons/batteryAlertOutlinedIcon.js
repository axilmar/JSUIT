import { initIcon } from "./icon.js";

//the url of the battery alert outlined svg; resolved relative to this module
const URL_BATTERYALERTOUTLINED = new URL('../../assets/icons/batteryAlertOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery alert outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryAlertOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryAlertOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERYALERTOUTLINED }, ...properties);
}

/**
 * Creates a battery alert outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryAlertOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBatteryAlertOutlinedIcon(element, ...properties);
    return element;
}
