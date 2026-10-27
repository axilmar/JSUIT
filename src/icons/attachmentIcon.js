import { initIcon } from "./icon.js";

//the url of the attachment svg; resolved relative to this module
const URL_ATTACHMENT = new URL('../../assets/icons/attachment.svg', import.meta.url).href;

/**
 * Initializes an icon element as an attachment icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/attachment.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAttachmentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'attachmentIcon', url: URL_ATTACHMENT }, ...properties);
}

/**
 * Creates an attachment icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const attachmentIcon = (...properties) => {
    const element = document.createElement('div');
    initAttachmentIcon(element, ...properties);
    return element;
}
