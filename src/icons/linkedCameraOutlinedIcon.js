import { initIcon } from "./icon.js";

//the url of the linked camera outlined svg; resolved relative to this module
const URL_LINKEDCAMERAOUTLINED = new URL('../../assets/icons/linkedCameraOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a linked camera outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/linkedCameraOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLinkedCameraOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'linkedCameraOutlinedIcon', url: URL_LINKEDCAMERAOUTLINED }, ...properties);
}

/**
 * Creates a linked camera outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const linkedCameraOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLinkedCameraOutlinedIcon(element, ...properties);
    return element;
}
