import { initIcon } from "./icon.js";

//the url of the devices fold outlined svg; resolved relative to this module
const URL_DEVICESFOLDOUTLINED = new URL('../../assets/icons/devicesFoldOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a devices fold outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/devicesFoldOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDevicesFoldOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'devicesFoldOutlinedIcon', url: URL_DEVICESFOLDOUTLINED }, ...properties);
}

/**
 * Creates a devices fold outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const devicesFoldOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDevicesFoldOutlinedIcon(element, ...properties);
    return element;
}
