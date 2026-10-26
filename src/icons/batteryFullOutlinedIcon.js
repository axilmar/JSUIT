import { initIcon } from "./icon.js";

//the url of the battery full outlined svg; resolved relative to this module
const URL_BATTERYFULLOUTLINED = new URL('../../assets/icons/batteryFullOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery full outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryFullOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryFullOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERYFULLOUTLINED }, ...properties);
}

/**
 * Creates a battery full outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryFullOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBatteryFullOutlinedIcon(element, ...properties);
    return element;
}
