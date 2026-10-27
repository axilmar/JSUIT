import { initIcon } from "./icon.js";

//the url of the signal wifi1 bar lock outlined svg; resolved relative to this module
const URL_SIGNALWIFI1BARLOCKOUTLINED = new URL('../../assets/icons/signalWifi1BarLockOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi1 bar lock outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifi1BarLockOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifi1BarLockOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalWifi1BarLockOutlinedIcon', url: URL_SIGNALWIFI1BARLOCKOUTLINED }, ...properties);
}

/**
 * Creates a signal wifi1 bar lock outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifi1BarLockOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifi1BarLockOutlinedIcon(element, ...properties);
    return element;
}
