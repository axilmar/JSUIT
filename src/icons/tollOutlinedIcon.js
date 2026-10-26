import { initIcon } from "./icon.js";

//the url of the toll outlined svg; resolved relative to this module
const URL_TOLLOUTLINED = new URL('../../assets/icons/tollOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a toll outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tollOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTollOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TOLLOUTLINED }, ...properties);
}

/**
 * Creates a toll outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tollOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTollOutlinedIcon(element, ...properties);
    return element;
}
