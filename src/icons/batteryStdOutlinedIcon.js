import { initIcon } from "./icon.js";

//the url of the battery std outlined svg; resolved relative to this module
const URL_BATTERYSTDOUTLINED = new URL('../../assets/icons/batteryStdOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery std outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryStdOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryStdOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERYSTDOUTLINED }, ...properties);
}

/**
 * Creates a battery std outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryStdOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBatteryStdOutlinedIcon(element, ...properties);
    return element;
}
