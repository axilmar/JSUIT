import { initIcon } from "./icon.js";

//the url of the redo svg; resolved relative to this module
const URL_REDO = new URL('../../assets/icons/redo.svg', import.meta.url).href;

/**
 * Initializes an icon element as a redo icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/redo.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRedoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REDO }, ...properties);
}

/**
 * Creates a redo icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const redoIcon = (...properties) => {
    const element = document.createElement('div');
    initRedoIcon(element, ...properties);
    return element;
}
