import { initIcon } from "./icon.js";

//the url of the signal cellular no sim outlined svg; resolved relative to this module
const URL_SIGNALCELLULARNOSIMOUTLINED = new URL('../../assets/icons/signalCellularNoSimOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular no sim outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularNoSimOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularNoSimOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalCellularNoSimOutlinedIcon', url: URL_SIGNALCELLULARNOSIMOUTLINED }, ...properties);
}

/**
 * Creates a signal cellular no sim outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularNoSimOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularNoSimOutlinedIcon(element, ...properties);
    return element;
}
