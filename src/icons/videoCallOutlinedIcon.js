import { initIcon } from "./icon.js";

//the url of the video call outlined svg; resolved relative to this module
const URL_VIDEOCALLOUTLINED = new URL('../../assets/icons/videoCallOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a video call outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videoCallOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideoCallOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'videoCallOutlinedIcon', url: URL_VIDEOCALLOUTLINED }, ...properties);
}

/**
 * Creates a video call outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videoCallOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVideoCallOutlinedIcon(element, ...properties);
    return element;
}
