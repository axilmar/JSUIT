import { initIcon } from "./icon.js";

//the url of the motion photos off svg; resolved relative to this module
const URL_MOTIONPHOTOSOFF = new URL('../../assets/icons/motionPhotosOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a motion photos off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/motionPhotosOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMotionPhotosOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'motionPhotosOffIcon', url: URL_MOTIONPHOTOSOFF }, ...properties);
}

/**
 * Creates a motion photos off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const motionPhotosOffIcon = (...properties) => {
    const element = document.createElement('div');
    initMotionPhotosOffIcon(element, ...properties);
    return element;
}
