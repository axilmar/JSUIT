import { initIcon } from "./icon.js";

//the url of the vibration svg; resolved relative to this module
const URL_VIBRATION = new URL('../../assets/icons/vibration.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vibration icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/vibration.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVibrationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'vibrationIcon', url: URL_VIBRATION }, ...properties);
}

/**
 * Creates a vibration icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const vibrationIcon = (...properties) => {
    const element = document.createElement('div');
    initVibrationIcon(element, ...properties);
    return element;
}
