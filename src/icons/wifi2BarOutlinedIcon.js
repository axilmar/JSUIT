import { initIcon } from "./icon.js";

//the url of the wifi2 bar outlined svg; resolved relative to this module
const URL_WIFI2BAROUTLINED = new URL('../../assets/icons/wifi2BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi2 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifi2BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifi2BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wifi2BarOutlinedIcon', url: URL_WIFI2BAROUTLINED }, ...properties);
}

/**
 * Creates a wifi2 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifi2BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWifi2BarOutlinedIcon(element, ...properties);
    return element;
}
