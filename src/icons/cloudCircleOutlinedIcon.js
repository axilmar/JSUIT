import { initIcon } from "./icon.js";

//the url of the cloud circle outlined svg; resolved relative to this module
const URL_CLOUDCIRCLEOUTLINED = new URL('../../assets/icons/cloudCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cloud circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cloudCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloudCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cloudCircleOutlinedIcon', url: URL_CLOUDCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a cloud circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cloudCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCloudCircleOutlinedIcon(element, ...properties);
    return element;
}
