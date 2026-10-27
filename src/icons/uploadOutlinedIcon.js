import { initIcon } from "./icon.js";

//the url of the upload outlined svg; resolved relative to this module
const URL_UPLOADOUTLINED = new URL('../../assets/icons/uploadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an upload outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/uploadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUploadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'uploadOutlinedIcon', url: URL_UPLOADOUTLINED }, ...properties);
}

/**
 * Creates an upload outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const uploadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUploadOutlinedIcon(element, ...properties);
    return element;
}
