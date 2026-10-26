import { initIcon } from "./icon.js";

//the url of the signal cellular alt2 bar svg; resolved relative to this module
const URL_SIGNALCELLULARALT2BAR = new URL('../../assets/icons/signalCellularAlt2Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular alt2 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularAlt2Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularAlt2BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALCELLULARALT2BAR }, ...properties);
}

/**
 * Creates a signal cellular alt2 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularAlt2BarIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularAlt2BarIcon(element, ...properties);
    return element;
}
