import { initIcon } from "./icon.js";

//the url of the signal cellular connected no internet1 bar outlined svg; resolved relative to this module
const URL_SIGNALCELLULARCONNECTEDNOINTERNET1BAROUTLINED = new URL('../../assets/icons/signalCellularConnectedNoInternet1BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular connected no internet1 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularConnectedNoInternet1BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularConnectedNoInternet1BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALCELLULARCONNECTEDNOINTERNET1BAROUTLINED }, ...properties);
}

/**
 * Creates a signal cellular connected no internet1 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularConnectedNoInternet1BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularConnectedNoInternet1BarOutlinedIcon(element, ...properties);
    return element;
}
