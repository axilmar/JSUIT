import { initIcon } from "./icon.js";

//the url of the motion photos auto svg; resolved relative to this module
const URL_MOTIONPHOTOSAUTO = new URL('../../assets/icons/motionPhotosAuto.svg', import.meta.url).href;

/**
 * Initializes an icon element as a motion photos auto icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/motionPhotosAuto.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMotionPhotosAutoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'motionPhotosAutoIcon', url: URL_MOTIONPHOTOSAUTO }, ...properties);
}

/**
 * Creates a motion photos auto icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const motionPhotosAutoIcon = (...properties) => {
    const element = document.createElement('div');
    initMotionPhotosAutoIcon(element, ...properties);
    return element;
}
