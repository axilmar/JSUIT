import { initIcon } from "./icon.js";

//the url of the signal wifi statusbar null outlined svg; resolved relative to this module
const URL_SIGNALWIFISTATUSBARNULLOUTLINED = new URL('../../assets/icons/signalWifiStatusbarNullOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi statusbar null outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifiStatusbarNullOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifiStatusbarNullOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalWifiStatusbarNullOutlinedIcon', url: URL_SIGNALWIFISTATUSBARNULLOUTLINED }, ...properties);
}

/**
 * Creates a signal wifi statusbar null outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifiStatusbarNullOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifiStatusbarNullOutlinedIcon(element, ...properties);
    return element;
}
