import { initIcon } from "./icon.js";

//the url of the battery2 bar svg; resolved relative to this module
const URL_BATTERY2BAR = new URL('../../assets/icons/battery2Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery2 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery2Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery2BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERY2BAR }, ...properties);
}

/**
 * Creates a battery2 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery2BarIcon = (...properties) => {
    const element = document.createElement('div');
    initBattery2BarIcon(element, ...properties);
    return element;
}
