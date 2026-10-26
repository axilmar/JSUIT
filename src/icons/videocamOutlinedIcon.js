import { initIcon } from "./icon.js";

//the url of the videocam outlined svg; resolved relative to this module
const URL_VIDEOCAMOUTLINED = new URL('../../assets/icons/videocamOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a videocam outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videocamOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideocamOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIDEOCAMOUTLINED }, ...properties);
}

/**
 * Creates a videocam outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videocamOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVideocamOutlinedIcon(element, ...properties);
    return element;
}
