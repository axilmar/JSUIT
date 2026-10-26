import { initIcon } from "./icon.js";

//the url of the battery unknown outlined svg; resolved relative to this module
const URL_BATTERYUNKNOWNOUTLINED = new URL('../../assets/icons/batteryUnknownOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery unknown outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryUnknownOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryUnknownOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERYUNKNOWNOUTLINED }, ...properties);
}

/**
 * Creates a battery unknown outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryUnknownOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBatteryUnknownOutlinedIcon(element, ...properties);
    return element;
}
