import { initIcon } from "./icon.js";

//the url of the signal cellular connected no internet0 bar svg; resolved relative to this module
const URL_SIGNALCELLULARCONNECTEDNOINTERNET0BAR = new URL('../../assets/icons/signalCellularConnectedNoInternet0Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular connected no internet0 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularConnectedNoInternet0Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularConnectedNoInternet0BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALCELLULARCONNECTEDNOINTERNET0BAR }, ...properties);
}

/**
 * Creates a signal cellular connected no internet0 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularConnectedNoInternet0BarIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularConnectedNoInternet0BarIcon(element, ...properties);
    return element;
}
