import { initIcon } from "./icon.js";

//the url of the drag handle svg; resolved relative to this module
const URL_DRAGHANDLE = new URL('../../assets/icons/dragHandle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a drag handle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dragHandle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDragHandleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DRAGHANDLE }, ...properties);
}

/**
 * Creates a drag handle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dragHandleIcon = (...properties) => {
    const element = document.createElement('div');
    initDragHandleIcon(element, ...properties);
    return element;
}
