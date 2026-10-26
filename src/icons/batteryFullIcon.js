import { initIcon } from "./icon.js";

//the url of the battery full svg; resolved relative to this module
const URL_BATTERYFULL = new URL('../../assets/icons/batteryFull.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery full icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryFull.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryFullIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERYFULL }, ...properties);
}

/**
 * Creates a battery full icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryFullIcon = (...properties) => {
    const element = document.createElement('div');
    initBatteryFullIcon(element, ...properties);
    return element;
}
