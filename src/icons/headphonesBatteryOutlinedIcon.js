import { initIcon } from "./icon.js";

//the url of the headphones battery outlined svg; resolved relative to this module
const URL_HEADPHONESBATTERYOUTLINED = new URL('../../assets/icons/headphonesBatteryOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a headphones battery outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/headphonesBatteryOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHeadphonesBatteryOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HEADPHONESBATTERYOUTLINED }, ...properties);
}

/**
 * Creates a headphones battery outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const headphonesBatteryOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHeadphonesBatteryOutlinedIcon(element, ...properties);
    return element;
}
