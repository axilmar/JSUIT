import { initIcon } from "./icon.js";

//the url of the personal video svg; resolved relative to this module
const URL_PERSONALVIDEO = new URL('../../assets/icons/personalVideo.svg', import.meta.url).href;

/**
 * Initializes an icon element as a personal video icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personalVideo.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonalVideoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'personalVideoIcon', url: URL_PERSONALVIDEO }, ...properties);
}

/**
 * Creates a personal video icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personalVideoIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonalVideoIcon(element, ...properties);
    return element;
}
