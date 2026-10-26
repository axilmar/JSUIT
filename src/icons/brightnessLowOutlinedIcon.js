import { initIcon } from "./icon.js";

//the url of the brightness low outlined svg; resolved relative to this module
const URL_BRIGHTNESSLOWOUTLINED = new URL('../../assets/icons/brightnessLowOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness low outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightnessLowOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightnessLowOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BRIGHTNESSLOWOUTLINED }, ...properties);
}

/**
 * Creates a brightness low outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightnessLowOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBrightnessLowOutlinedIcon(element, ...properties);
    return element;
}
