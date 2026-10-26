import { initIcon } from "./icon.js";

//the url of the mode fan off outlined svg; resolved relative to this module
const URL_MODEFANOFFOUTLINED = new URL('../../assets/icons/modeFanOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mode fan off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/modeFanOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initModeFanOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MODEFANOFFOUTLINED }, ...properties);
}

/**
 * Creates a mode fan off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const modeFanOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initModeFanOffOutlinedIcon(element, ...properties);
    return element;
}
