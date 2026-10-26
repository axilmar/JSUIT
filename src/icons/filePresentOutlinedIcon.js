import { initIcon } from "./icon.js";

//the url of the file present outlined svg; resolved relative to this module
const URL_FILEPRESENTOUTLINED = new URL('../../assets/icons/filePresentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a file present outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filePresentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilePresentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILEPRESENTOUTLINED }, ...properties);
}

/**
 * Creates a file present outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filePresentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilePresentOutlinedIcon(element, ...properties);
    return element;
}
