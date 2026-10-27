import { initIcon } from "./icon.js";

//the url of the upload file outlined svg; resolved relative to this module
const URL_UPLOADFILEOUTLINED = new URL('../../assets/icons/uploadFileOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an upload file outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/uploadFileOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUploadFileOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'uploadFileOutlinedIcon', url: URL_UPLOADFILEOUTLINED }, ...properties);
}

/**
 * Creates an upload file outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const uploadFileOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUploadFileOutlinedIcon(element, ...properties);
    return element;
}
