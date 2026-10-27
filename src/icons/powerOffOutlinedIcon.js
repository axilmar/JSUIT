import { initIcon } from "./icon.js";

//the url of the power off outlined svg; resolved relative to this module
const URL_POWEROFFOUTLINED = new URL('../../assets/icons/powerOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a power off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/powerOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPowerOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'powerOffOutlinedIcon', url: URL_POWEROFFOUTLINED }, ...properties);
}

/**
 * Creates a power off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const powerOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPowerOffOutlinedIcon(element, ...properties);
    return element;
}
