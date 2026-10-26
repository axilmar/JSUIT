import { initIcon } from "./icon.js";

//the url of the signal cellular connected no internet3 bar svg; resolved relative to this module
const URL_SIGNALCELLULARCONNECTEDNOINTERNET3BAR = new URL('../../assets/icons/signalCellularConnectedNoInternet3Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular connected no internet3 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularConnectedNoInternet3Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularConnectedNoInternet3BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALCELLULARCONNECTEDNOINTERNET3BAR }, ...properties);
}

/**
 * Creates a signal cellular connected no internet3 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularConnectedNoInternet3BarIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularConnectedNoInternet3BarIcon(element, ...properties);
    return element;
}
