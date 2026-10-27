import { initIcon } from "./icon.js";

//the url of the brightness high outlined svg; resolved relative to this module
const URL_BRIGHTNESSHIGHOUTLINED = new URL('../../assets/icons/brightnessHighOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness high outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightnessHighOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightnessHighOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'brightnessHighOutlinedIcon', url: URL_BRIGHTNESSHIGHOUTLINED }, ...properties);
}

/**
 * Creates a brightness high outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightnessHighOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBrightnessHighOutlinedIcon(element, ...properties);
    return element;
}
