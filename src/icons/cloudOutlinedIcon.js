import { initIcon } from "./icon.js";

//the url of the cloud outlined svg; resolved relative to this module
const URL_CLOUDOUTLINED = new URL('../../assets/icons/cloudOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cloud outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cloudOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloudOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLOUDOUTLINED }, ...properties);
}

/**
 * Creates a cloud outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cloudOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCloudOutlinedIcon(element, ...properties);
    return element;
}
