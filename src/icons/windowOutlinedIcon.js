import { initIcon } from "./icon.js";

//the url of the window outlined svg; resolved relative to this module
const URL_WINDOWOUTLINED = new URL('../../assets/icons/windowOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a window outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/windowOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWindowOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WINDOWOUTLINED }, ...properties);
}

/**
 * Creates a window outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const windowOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWindowOutlinedIcon(element, ...properties);
    return element;
}
