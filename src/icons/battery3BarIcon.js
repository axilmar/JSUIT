import { initIcon } from "./icon.js";

//the url of the battery3 bar svg; resolved relative to this module
const URL_BATTERY3BAR = new URL('../../assets/icons/battery3Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery3 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery3Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery3BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATTERY3BAR }, ...properties);
}

/**
 * Creates a battery3 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery3BarIcon = (...properties) => {
    const element = document.createElement('div');
    initBattery3BarIcon(element, ...properties);
    return element;
}
