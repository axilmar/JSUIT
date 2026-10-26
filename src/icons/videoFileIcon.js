import { initIcon } from "./icon.js";

//the url of the video file svg; resolved relative to this module
const URL_VIDEOFILE = new URL('../../assets/icons/videoFile.svg', import.meta.url).href;

/**
 * Initializes an icon element as a video file icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videoFile.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideoFileIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIDEOFILE }, ...properties);
}

/**
 * Creates a video file icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videoFileIcon = (...properties) => {
    const element = document.createElement('div');
    initVideoFileIcon(element, ...properties);
    return element;
}
