import { initIcon } from "./icon.js";

//the url of the file present svg; resolved relative to this module
const URL_FILEPRESENT = new URL('../../assets/icons/filePresent.svg', import.meta.url).href;

/**
 * Initializes an icon element as a file present icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filePresent.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilePresentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filePresentIcon', url: URL_FILEPRESENT }, ...properties);
}

/**
 * Creates a file present icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filePresentIcon = (...properties) => {
    const element = document.createElement('div');
    initFilePresentIcon(element, ...properties);
    return element;
}
