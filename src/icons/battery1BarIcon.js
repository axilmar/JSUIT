import { initIcon } from "./icon.js";

//the url of the battery1 bar svg; resolved relative to this module
const URL_BATTERY1BAR = new URL('../../assets/icons/battery1Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery1 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery1Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery1BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERY1BAR }, ...properties);
}

/**
 * Creates a battery1 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery1BarIcon = (...properties) => {
    const element = document.createElement('div');
    initBattery1BarIcon(element, ...properties);
    return element;
}
