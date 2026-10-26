import { initIcon } from "./icon.js";

//the url of the leak remove outlined svg; resolved relative to this module
const URL_LEAKREMOVEOUTLINED = new URL('../../assets/icons/leakRemoveOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a leak remove outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/leakRemoveOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLeakRemoveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LEAKREMOVEOUTLINED }, ...properties);
}

/**
 * Creates a leak remove outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const leakRemoveOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLeakRemoveOutlinedIcon(element, ...properties);
    return element;
}
