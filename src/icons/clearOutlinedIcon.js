import { initIcon } from "./icon.js";

//the url of the clear outlined svg; resolved relative to this module
const URL_CLEAROUTLINED = new URL('../../assets/icons/clearOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a clear outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/clearOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initClearOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'clearOutlinedIcon', url: URL_CLEAROUTLINED }, ...properties);
}

/**
 * Creates a clear outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const clearOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initClearOutlinedIcon(element, ...properties);
    return element;
}
