import { initIcon } from "./icon.js";

//the url of the attach file svg; resolved relative to this module
const URL_ATTACHFILE = new URL('../../assets/icons/attachFile.svg', import.meta.url).href;

/**
 * Initializes an icon element as an attach file icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/attachFile.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAttachFileIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'attachFileIcon', url: URL_ATTACHFILE }, ...properties);
}

/**
 * Creates an attach file icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const attachFileIcon = (...properties) => {
    const element = document.createElement('div');
    initAttachFileIcon(element, ...properties);
    return element;
}
