import { initIcon } from "./icon.js";

//the url of the accessible forward outlined svg; resolved relative to this module
const URL_ACCESSIBLEFORWARDOUTLINED = new URL('../../assets/icons/accessibleForwardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an accessible forward outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accessibleForwardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccessibleForwardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ACCESSIBLEFORWARDOUTLINED }, ...properties);
}

/**
 * Creates an accessible forward outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accessibleForwardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAccessibleForwardOutlinedIcon(element, ...properties);
    return element;
}
