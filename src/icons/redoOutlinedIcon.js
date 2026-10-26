import { initIcon } from "./icon.js";

//the url of the redo outlined svg; resolved relative to this module
const URL_REDOOUTLINED = new URL('../../assets/icons/redoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a redo outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/redoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRedoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REDOOUTLINED }, ...properties);
}

/**
 * Creates a redo outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const redoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRedoOutlinedIcon(element, ...properties);
    return element;
}
