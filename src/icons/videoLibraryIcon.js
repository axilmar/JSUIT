import { initIcon } from "./icon.js";

//the url of the video library svg; resolved relative to this module
const URL_VIDEOLIBRARY = new URL('../../assets/icons/videoLibrary.svg', import.meta.url).href;

/**
 * Initializes an icon element as a video library icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videoLibrary.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideoLibraryIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIDEOLIBRARY }, ...properties);
}

/**
 * Creates a video library icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videoLibraryIcon = (...properties) => {
    const element = document.createElement('div');
    initVideoLibraryIcon(element, ...properties);
    return element;
}
