import { initIcon } from "./icon.js";

//the url of the cloud download outlined svg; resolved relative to this module
const URL_CLOUDDOWNLOADOUTLINED = new URL('../../assets/icons/cloudDownloadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cloud download outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cloudDownloadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloudDownloadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cloudDownloadOutlinedIcon', url: URL_CLOUDDOWNLOADOUTLINED }, ...properties);
}

/**
 * Creates a cloud download outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cloudDownloadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCloudDownloadOutlinedIcon(element, ...properties);
    return element;
}
