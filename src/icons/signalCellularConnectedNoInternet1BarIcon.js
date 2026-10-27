import { initIcon } from "./icon.js";

//the url of the signal cellular connected no internet1 bar svg; resolved relative to this module
const URL_SIGNALCELLULARCONNECTEDNOINTERNET1BAR = new URL('../../assets/icons/signalCellularConnectedNoInternet1Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular connected no internet1 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularConnectedNoInternet1Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularConnectedNoInternet1BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalCellularConnectedNoInternet1BarIcon', url: URL_SIGNALCELLULARCONNECTEDNOINTERNET1BAR }, ...properties);
}

/**
 * Creates a signal cellular connected no internet1 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularConnectedNoInternet1BarIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularConnectedNoInternet1BarIcon(element, ...properties);
    return element;
}
