import { initIcon } from "./icon.js";

//the url of the battery charging full svg; resolved relative to this module
const URL_BATTERYCHARGINGFULL = new URL('../../assets/icons/batteryChargingFull.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery charging full icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/batteryChargingFull.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBatteryChargingFullIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'batteryChargingFullIcon', url: URL_BATTERYCHARGINGFULL }, ...properties);
}

/**
 * Creates a battery charging full icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const batteryChargingFullIcon = (...properties) => {
    const element = document.createElement('div');
    initBatteryChargingFullIcon(element, ...properties);
    return element;
}
