import { initIcon } from "./icon.js";

//the url of the video call svg; resolved relative to this module
const URL_VIDEOCALL = new URL('../../assets/icons/videoCall.svg', import.meta.url).href;

/**
 * Initializes an icon element as a video call icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videoCall.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideoCallIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'videoCallIcon', url: URL_VIDEOCALL }, ...properties);
}

/**
 * Creates a video call icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videoCallIcon = (...properties) => {
    const element = document.createElement('div');
    initVideoCallIcon(element, ...properties);
    return element;
}
