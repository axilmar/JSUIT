import { initIcon } from "./icon.js";

//the url of the battery5 bar svg; resolved relative to this module
const URL_BATTERY5BAR = new URL('../../assets/icons/battery5Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a battery5 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/battery5Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBattery5BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'battery5BarIcon', url: URL_BATTERY5BAR }, ...properties);
}

/**
 * Creates a battery5 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const battery5BarIcon = (...properties) => {
    const element = document.createElement('div');
    initBattery5BarIcon(element, ...properties);
    return element;
}
