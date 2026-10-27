import { initIcon } from "./icon.js";

//the url of the file copy outlined svg; resolved relative to this module
const URL_FILECOPYOUTLINED = new URL('../../assets/icons/fileCopyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a file copy outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fileCopyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFileCopyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fileCopyOutlinedIcon', url: URL_FILECOPYOUTLINED }, ...properties);
}

/**
 * Creates a file copy outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fileCopyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFileCopyOutlinedIcon(element, ...properties);
    return element;
}
