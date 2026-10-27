import { initIcon } from "./icon.js";

//the url of the vibration outlined svg; resolved relative to this module
const URL_VIBRATIONOUTLINED = new URL('../../assets/icons/vibrationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vibration outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/vibrationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVibrationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'vibrationOutlinedIcon', url: URL_VIBRATIONOUTLINED }, ...properties);
}

/**
 * Creates a vibration outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const vibrationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVibrationOutlinedIcon(element, ...properties);
    return element;
}
