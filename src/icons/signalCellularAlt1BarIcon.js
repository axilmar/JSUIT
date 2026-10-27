import { initIcon } from "./icon.js";

//the url of the signal cellular alt1 bar svg; resolved relative to this module
const URL_SIGNALCELLULARALT1BAR = new URL('../../assets/icons/signalCellularAlt1Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular alt1 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularAlt1Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularAlt1BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalCellularAlt1BarIcon', url: URL_SIGNALCELLULARALT1BAR }, ...properties);
}

/**
 * Creates a signal cellular alt1 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularAlt1BarIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularAlt1BarIcon(element, ...properties);
    return element;
}
