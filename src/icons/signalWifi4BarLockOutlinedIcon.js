import { initIcon } from "./icon.js";

//the url of the signal wifi4 bar lock outlined svg; resolved relative to this module
const URL_SIGNALWIFI4BARLOCKOUTLINED = new URL('../../assets/icons/signalWifi4BarLockOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi4 bar lock outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifi4BarLockOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifi4BarLockOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALWIFI4BARLOCKOUTLINED }, ...properties);
}

/**
 * Creates a signal wifi4 bar lock outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifi4BarLockOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifi4BarLockOutlinedIcon(element, ...properties);
    return element;
}
