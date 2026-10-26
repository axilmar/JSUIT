import { initIcon } from "./icon.js";

//the url of the cloud upload svg; resolved relative to this module
const URL_CLOUDUPLOAD = new URL('../../assets/icons/cloudUpload.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cloud upload icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cloudUpload.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloudUploadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLOUDUPLOAD }, ...properties);
}

/**
 * Creates a cloud upload icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cloudUploadIcon = (...properties) => {
    const element = document.createElement('div');
    initCloudUploadIcon(element, ...properties);
    return element;
}
