import { initIcon } from "./icon.js";

//the url of the battery6 bar svg; resolved relative to this module
const URL_BATTERY6BAR = new URL('../../assets/icons/battery6Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery6 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery6Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery6BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'battery6BarIcon', url: URL_BATTERY6BAR }, ...properties);
}

/**
 * Creates a battery6 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery6BarIcon = (...properties) => {
    const element = document.createElement('div');
    initBattery6BarIcon(element, ...properties);
    return element;
}
