import { initIcon } from "./icon.js";

//the url of the drag handle outlined svg; resolved relative to this module
const URL_DRAGHANDLEOUTLINED = new URL('../../assets/icons/dragHandleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a drag handle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dragHandleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDragHandleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DRAGHANDLEOUTLINED }, ...properties);
}

/**
 * Creates a drag handle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dragHandleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDragHandleOutlinedIcon(element, ...properties);
    return element;
}
