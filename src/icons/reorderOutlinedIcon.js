import { initIcon } from "./icon.js";

//the url of the reorder outlined svg; resolved relative to this module
const URL_REORDEROUTLINED = new URL('../../assets/icons/reorderOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a reorder outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/reorderOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReorderOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REORDEROUTLINED }, ...properties);
}

/**
 * Creates a reorder outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const reorderOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initReorderOutlinedIcon(element, ...properties);
    return element;
}
