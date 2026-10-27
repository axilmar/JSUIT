import { initIcon } from "./icon.js";

//the url of the clear all outlined svg; resolved relative to this module
const URL_CLEARALLOUTLINED = new URL('../../assets/icons/clearAllOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a clear all outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/clearAllOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initClearAllOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'clearAllOutlinedIcon', url: URL_CLEARALLOUTLINED }, ...properties);
}

/**
 * Creates a clear all outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const clearAllOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initClearAllOutlinedIcon(element, ...properties);
    return element;
}
