import { initIcon } from "./icon.js";

//the url of the attachment outlined svg; resolved relative to this module
const URL_ATTACHMENTOUTLINED = new URL('../../assets/icons/attachmentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an attachment outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/attachmentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAttachmentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'attachmentOutlinedIcon', url: URL_ATTACHMENTOUTLINED }, ...properties);
}

/**
 * Creates an attachment outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const attachmentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAttachmentOutlinedIcon(element, ...properties);
    return element;
}
