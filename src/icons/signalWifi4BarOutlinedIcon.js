import { initIcon } from "./icon.js";

//the url of the signal wifi4 bar outlined svg; resolved relative to this module
const URL_SIGNALWIFI4BAROUTLINED = new URL('../../assets/icons/signalWifi4BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi4 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifi4BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifi4BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalWifi4BarOutlinedIcon', url: URL_SIGNALWIFI4BAROUTLINED }, ...properties);
}

/**
 * Creates a signal wifi4 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifi4BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifi4BarOutlinedIcon(element, ...properties);
    return element;
}
