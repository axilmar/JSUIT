import { initIcon } from "./icon.js";

//the url of the wifi1 bar outlined svg; resolved relative to this module
const URL_WIFI1BAROUTLINED = new URL('../../assets/icons/wifi1BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi1 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifi1BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifi1BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wifi1BarOutlinedIcon', url: URL_WIFI1BAROUTLINED }, ...properties);
}

/**
 * Creates a wifi1 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifi1BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWifi1BarOutlinedIcon(element, ...properties);
    return element;
}
