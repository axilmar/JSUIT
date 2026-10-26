import { initIcon } from "./icon.js";

//the url of the devices outlined svg; resolved relative to this module
const URL_DEVICESOUTLINED = new URL('../../assets/icons/devicesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a devices outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/devicesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDevicesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DEVICESOUTLINED }, ...properties);
}

/**
 * Creates a devices outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const devicesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDevicesOutlinedIcon(element, ...properties);
    return element;
}
