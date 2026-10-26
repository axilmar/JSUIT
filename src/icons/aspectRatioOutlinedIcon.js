import { initIcon } from "./icon.js";

//the url of the aspect ratio outlined svg; resolved relative to this module
const URL_ASPECTRATIOOUTLINED = new URL('../../assets/icons/aspectRatioOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an aspect ratio outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/aspectRatioOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAspectRatioOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ASPECTRATIOOUTLINED }, ...properties);
}

/**
 * Creates an aspect ratio outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const aspectRatioOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAspectRatioOutlinedIcon(element, ...properties);
    return element;
}
