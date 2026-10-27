import { initIcon } from "./icon.js";

//the url of the brightness high svg; resolved relative to this module
const URL_BRIGHTNESSHIGH = new URL('../../assets/icons/brightnessHigh.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness high icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightnessHigh.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightnessHighIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'brightnessHighIcon', url: URL_BRIGHTNESSHIGH }, ...properties);
}

/**
 * Creates a brightness high icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightnessHighIcon = (...properties) => {
    const element = document.createElement('div');
    initBrightnessHighIcon(element, ...properties);
    return element;
}
