import { initIcon } from "./icon.js";

//the url of the signal cellular off outlined svg; resolved relative to this module
const URL_SIGNALCELLULAROFFOUTLINED = new URL('../../assets/icons/signalCellularOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALCELLULAROFFOUTLINED }, ...properties);
}

/**
 * Creates a signal cellular off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularOffOutlinedIcon(element, ...properties);
    return element;
}
