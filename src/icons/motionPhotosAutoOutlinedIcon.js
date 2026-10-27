import { initIcon } from "./icon.js";

//the url of the motion photos auto outlined svg; resolved relative to this module
const URL_MOTIONPHOTOSAUTOOUTLINED = new URL('../../assets/icons/motionPhotosAutoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a motion photos auto outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/motionPhotosAutoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMotionPhotosAutoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'motionPhotosAutoOutlinedIcon', url: URL_MOTIONPHOTOSAUTOOUTLINED }, ...properties);
}

/**
 * Creates a motion photos auto outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const motionPhotosAutoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMotionPhotosAutoOutlinedIcon(element, ...properties);
    return element;
}
