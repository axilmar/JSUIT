import { initIcon } from "./icon.js";

//the url of the video library outlined svg; resolved relative to this module
const URL_VIDEOLIBRARYOUTLINED = new URL('../../assets/icons/videoLibraryOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a video library outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videoLibraryOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideoLibraryOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'videoLibraryOutlinedIcon', url: URL_VIDEOLIBRARYOUTLINED }, ...properties);
}

/**
 * Creates a video library outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videoLibraryOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVideoLibraryOutlinedIcon(element, ...properties);
    return element;
}
