import { initIcon } from "./icon.js";

//the url of the subdirectory arrow left svg; resolved relative to this module
const URL_SUBDIRECTORYARROWLEFT = new URL('../../assets/icons/subdirectoryArrowLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as a subdirectory arrow left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/subdirectoryArrowLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSubdirectoryArrowLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SUBDIRECTORYARROWLEFT }, ...properties);
}

/**
 * Creates a subdirectory arrow left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const subdirectoryArrowLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initSubdirectoryArrowLeftIcon(element, ...properties);
    return element;
}
