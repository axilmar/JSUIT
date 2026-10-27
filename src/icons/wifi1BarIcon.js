import { initIcon } from "./icon.js";

//the url of the wifi1 bar svg; resolved relative to this module
const URL_WIFI1BAR = new URL('../../assets/icons/wifi1Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi1 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifi1Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifi1BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wifi1BarIcon', url: URL_WIFI1BAR }, ...properties);
}

/**
 * Creates a wifi1 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifi1BarIcon = (...properties) => {
    const element = document.createElement('div');
    initWifi1BarIcon(element, ...properties);
    return element;
}
