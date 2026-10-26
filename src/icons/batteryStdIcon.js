import { initIcon } from "./icon.js";

//the url of the battery std svg; resolved relative to this module
const URL_BATTERYSTD = new URL('../../assets/icons/batteryStd.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery std icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryStd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryStdIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERYSTD }, ...properties);
}

/**
 * Creates a battery std icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryStdIcon = (...properties) => {
    const element = document.createElement('div');
    initBatteryStdIcon(element, ...properties);
    return element;
}
