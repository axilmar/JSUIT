import { initIcon } from "./icon.js";

//the url of the videocam svg; resolved relative to this module
const URL_VIDEOCAM = new URL('../../assets/icons/videocam.svg', import.meta.url).href;

/**
 * Initializes an icon element as a videocam icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videocam.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideocamIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIDEOCAM }, ...properties);
}

/**
 * Creates a videocam icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videocamIcon = (...properties) => {
    const element = document.createElement('div');
    initVideocamIcon(element, ...properties);
    return element;
}
