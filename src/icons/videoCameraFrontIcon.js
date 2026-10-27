import { initIcon } from "./icon.js";

//the url of the video camera front svg; resolved relative to this module
const URL_VIDEOCAMERAFRONT = new URL('../../assets/icons/videoCameraFront.svg', import.meta.url).href;

/**
 * Initializes an icon element as a video camera front icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videoCameraFront.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideoCameraFrontIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'videoCameraFrontIcon', url: URL_VIDEOCAMERAFRONT }, ...properties);
}

/**
 * Creates a video camera front icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videoCameraFrontIcon = (...properties) => {
    const element = document.createElement('div');
    initVideoCameraFrontIcon(element, ...properties);
    return element;
}
