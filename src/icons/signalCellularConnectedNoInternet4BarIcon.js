import { initIcon } from "./icon.js";

//the url of the signal cellular connected no internet4 bar svg; resolved relative to this module
const URL_SIGNALCELLULARCONNECTEDNOINTERNET4BAR = new URL('../../assets/icons/signalCellularConnectedNoInternet4Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular connected no internet4 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularConnectedNoInternet4Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularConnectedNoInternet4BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalCellularConnectedNoInternet4BarIcon', url: URL_SIGNALCELLULARCONNECTEDNOINTERNET4BAR }, ...properties);
}

/**
 * Creates a signal cellular connected no internet4 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularConnectedNoInternet4BarIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularConnectedNoInternet4BarIcon(element, ...properties);
    return element;
}
