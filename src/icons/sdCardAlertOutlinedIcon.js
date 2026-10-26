import { initIcon } from "./icon.js";

//the url of the sd card alert outlined svg; resolved relative to this module
const URL_SDCARDALERTOUTLINED = new URL('../../assets/icons/sdCardAlertOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sd card alert outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sdCardAlertOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSdCardAlertOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SDCARDALERTOUTLINED }, ...properties);
}

/**
 * Creates a sd card alert outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sdCardAlertOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSdCardAlertOutlinedIcon(element, ...properties);
    return element;
}
