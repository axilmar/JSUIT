import { initIcon } from "./icon.js";

//the url of the motion photos off outlined svg; resolved relative to this module
const URL_MOTIONPHOTOSOFFOUTLINED = new URL('../../assets/icons/motionPhotosOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a motion photos off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/motionPhotosOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMotionPhotosOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOTIONPHOTOSOFFOUTLINED }, ...properties);
}

/**
 * Creates a motion photos off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const motionPhotosOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMotionPhotosOffOutlinedIcon(element, ...properties);
    return element;
}
