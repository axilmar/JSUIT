import { initIcon } from "./icon.js";

//the url of the microwave outlined svg; resolved relative to this module
const URL_MICROWAVEOUTLINED = new URL('../../assets/icons/microwaveOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a microwave outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/microwaveOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMicrowaveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MICROWAVEOUTLINED }, ...properties);
}

/**
 * Creates a microwave outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const microwaveOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMicrowaveOutlinedIcon(element, ...properties);
    return element;
}
