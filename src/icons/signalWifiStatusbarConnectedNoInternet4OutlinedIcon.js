import { initIcon } from "./icon.js";

//the url of the signal wifi statusbar connected no internet4 outlined svg; resolved relative to this module
const URL_SIGNALWIFISTATUSBARCONNECTEDNOINTERNET4OUTLINED = new URL('../../assets/icons/signalWifiStatusbarConnectedNoInternet4Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi statusbar connected no internet4 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifiStatusbarConnectedNoInternet4Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifiStatusbarConnectedNoInternet4OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALWIFISTATUSBARCONNECTEDNOINTERNET4OUTLINED }, ...properties);
}

/**
 * Creates a signal wifi statusbar connected no internet4 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifiStatusbarConnectedNoInternet4OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifiStatusbarConnectedNoInternet4OutlinedIcon(element, ...properties);
    return element;
}
