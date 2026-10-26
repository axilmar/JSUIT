import { initIcon } from "./icon.js";

//the url of the cloud off outlined svg; resolved relative to this module
const URL_CLOUDOFFOUTLINED = new URL('../../assets/icons/cloudOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cloud off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cloudOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloudOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLOUDOFFOUTLINED }, ...properties);
}

/**
 * Creates a cloud off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cloudOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCloudOffOutlinedIcon(element, ...properties);
    return element;
}
