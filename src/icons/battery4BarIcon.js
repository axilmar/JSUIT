import { initIcon } from "./icon.js";

//the url of the battery4 bar svg; resolved relative to this module
const URL_BATTERY4BAR = new URL('../../assets/icons/battery4Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery4 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery4Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery4BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERY4BAR }, ...properties);
}

/**
 * Creates a battery4 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery4BarIcon = (...properties) => {
    const element = document.createElement('div');
    initBattery4BarIcon(element, ...properties);
    return element;
}
