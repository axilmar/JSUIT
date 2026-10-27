import { initIcon } from "./icon.js";

//the url of the video camera front outlined svg; resolved relative to this module
const URL_VIDEOCAMERAFRONTOUTLINED = new URL('../../assets/icons/videoCameraFrontOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a video camera front outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videoCameraFrontOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideoCameraFrontOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'videoCameraFrontOutlinedIcon', url: URL_VIDEOCAMERAFRONTOUTLINED }, ...properties);
}

/**
 * Creates a video camera front outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videoCameraFrontOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVideoCameraFrontOutlinedIcon(element, ...properties);
    return element;
}
