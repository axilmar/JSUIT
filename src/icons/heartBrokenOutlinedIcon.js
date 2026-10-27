import { initIcon } from "./icon.js";

//the url of the heart broken outlined svg; resolved relative to this module
const URL_HEARTBROKENOUTLINED = new URL('../../assets/icons/heartBrokenOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a heart broken outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/heartBrokenOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHeartBrokenOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'heartBrokenOutlinedIcon', url: URL_HEARTBROKENOUTLINED }, ...properties);
}

/**
 * Creates a heart broken outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const heartBrokenOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHeartBrokenOutlinedIcon(element, ...properties);
    return element;
}
