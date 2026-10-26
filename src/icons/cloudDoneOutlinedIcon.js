import { initIcon } from "./icon.js";

//the url of the cloud done outlined svg; resolved relative to this module
const URL_CLOUDDONEOUTLINED = new URL('../../assets/icons/cloudDoneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cloud done outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cloudDoneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloudDoneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLOUDDONEOUTLINED }, ...properties);
}

/**
 * Creates a cloud done outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cloudDoneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCloudDoneOutlinedIcon(element, ...properties);
    return element;
}
