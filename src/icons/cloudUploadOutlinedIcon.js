import { initIcon } from "./icon.js";

//the url of the cloud upload outlined svg; resolved relative to this module
const URL_CLOUDUPLOADOUTLINED = new URL('../../assets/icons/cloudUploadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cloud upload outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cloudUploadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloudUploadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cloudUploadOutlinedIcon', url: URL_CLOUDUPLOADOUTLINED }, ...properties);
}

/**
 * Creates a cloud upload outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cloudUploadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCloudUploadOutlinedIcon(element, ...properties);
    return element;
}
