import { initIcon } from "./icon.js";

//the url of the auto fix off outlined svg; resolved relative to this module
const URL_AUTOFIXOFFOUTLINED = new URL('../../assets/icons/autoFixOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto fix off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoFixOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoFixOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AUTOFIXOFFOUTLINED }, ...properties);
}

/**
 * Creates an auto fix off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoFixOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoFixOffOutlinedIcon(element, ...properties);
    return element;
}
