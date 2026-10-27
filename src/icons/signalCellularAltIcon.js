import { initIcon } from "./icon.js";

//the url of the signal cellular alt svg; resolved relative to this module
const URL_SIGNALCELLULARALT = new URL('../../assets/icons/signalCellularAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalCellularAltIcon', url: URL_SIGNALCELLULARALT }, ...properties);
}

/**
 * Creates a signal cellular alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularAltIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularAltIcon(element, ...properties);
    return element;
}
