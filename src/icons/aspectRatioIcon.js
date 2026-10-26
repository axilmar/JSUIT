import { initIcon } from "./icon.js";

//the url of the aspect ratio svg; resolved relative to this module
const URL_ASPECTRATIO = new URL('../../assets/icons/aspectRatio.svg', import.meta.url).href;

/**
 * Initializes an icon element as an aspect ratio icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/aspectRatio.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAspectRatioIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ASPECTRATIO }, ...properties);
}

/**
 * Creates an aspect ratio icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const aspectRatioIcon = (...properties) => {
    const element = document.createElement('div');
    initAspectRatioIcon(element, ...properties);
    return element;
}
