import { initIcon } from "./icon.js";

//the url of the music video svg; resolved relative to this module
const URL_MUSICVIDEO = new URL('../../assets/icons/musicVideo.svg', import.meta.url).href;

/**
 * Initializes an icon element as a music video icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/musicVideo.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMusicVideoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MUSICVIDEO }, ...properties);
}

/**
 * Creates a music video icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const musicVideoIcon = (...properties) => {
    const element = document.createElement('div');
    initMusicVideoIcon(element, ...properties);
    return element;
}
