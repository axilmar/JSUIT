import { initIcon } from "./icon.js";

//the url of the hardware outlined svg; resolved relative to this module
const URL_HARDWAREOUTLINED = new URL('../../assets/icons/hardwareOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hardware outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hardwareOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHardwareOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hardwareOutlinedIcon', url: URL_HARDWAREOUTLINED }, ...properties);
}

/**
 * Creates a hardware outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hardwareOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHardwareOutlinedIcon(element, ...properties);
    return element;
}
