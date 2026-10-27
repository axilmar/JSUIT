import { initIcon } from "./icon.js";

//the url of the video file outlined svg; resolved relative to this module
const URL_VIDEOFILEOUTLINED = new URL('../../assets/icons/videoFileOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a video file outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videoFileOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideoFileOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'videoFileOutlinedIcon', url: URL_VIDEOFILEOUTLINED }, ...properties);
}

/**
 * Creates a video file outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videoFileOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVideoFileOutlinedIcon(element, ...properties);
    return element;
}
