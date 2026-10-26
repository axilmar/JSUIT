import { initIcon } from "./icon.js";

//the url of the video stable svg; resolved relative to this module
const URL_VIDEOSTABLE = new URL('../../assets/icons/videoStable.svg', import.meta.url).href;

/**
 * Initializes an icon element as a video stable icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videoStable.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideoStableIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIDEOSTABLE }, ...properties);
}

/**
 * Creates a video stable icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videoStableIcon = (...properties) => {
    const element = document.createElement('div');
    initVideoStableIcon(element, ...properties);
    return element;
}
