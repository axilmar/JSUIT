import { initIcon } from "./icon.js";

//the url of the signal wifi statusbar4 bar outlined svg; resolved relative to this module
const URL_SIGNALWIFISTATUSBAR4BAROUTLINED = new URL('../../assets/icons/signalWifiStatusbar4BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi statusbar4 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifiStatusbar4BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifiStatusbar4BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALWIFISTATUSBAR4BAROUTLINED }, ...properties);
}

/**
 * Creates a signal wifi statusbar4 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifiStatusbar4BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifiStatusbar4BarOutlinedIcon(element, ...properties);
    return element;
}
