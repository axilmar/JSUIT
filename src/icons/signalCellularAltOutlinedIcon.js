import { initIcon } from "./icon.js";

//the url of the signal cellular alt outlined svg; resolved relative to this module
const URL_SIGNALCELLULARALTOUTLINED = new URL('../../assets/icons/signalCellularAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALCELLULARALTOUTLINED }, ...properties);
}

/**
 * Creates a signal cellular alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularAltOutlinedIcon(element, ...properties);
    return element;
}
