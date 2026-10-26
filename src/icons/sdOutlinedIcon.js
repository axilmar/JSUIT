import { initIcon } from "./icon.js";

//the url of the sd outlined svg; resolved relative to this module
const URL_SDOUTLINED = new URL('../../assets/icons/sdOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sd outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sdOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSdOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SDOUTLINED }, ...properties);
}

/**
 * Creates a sd outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sdOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSdOutlinedIcon(element, ...properties);
    return element;
}
