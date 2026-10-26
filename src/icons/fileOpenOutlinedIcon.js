import { initIcon } from "./icon.js";

//the url of the file open outlined svg; resolved relative to this module
const URL_FILEOPENOUTLINED = new URL('../../assets/icons/fileOpenOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a file open outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fileOpenOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFileOpenOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILEOPENOUTLINED }, ...properties);
}

/**
 * Creates a file open outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fileOpenOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFileOpenOutlinedIcon(element, ...properties);
    return element;
}
