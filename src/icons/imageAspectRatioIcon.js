import { initIcon } from "./icon.js";

//the url of the image aspect ratio svg; resolved relative to this module
const URL_IMAGEASPECTRATIO = new URL('../../assets/icons/imageAspectRatio.svg', import.meta.url).href;

/**
 * Initializes an icon element as an image aspect ratio icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/imageAspectRatio.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initImageAspectRatioIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'imageAspectRatioIcon', url: URL_IMAGEASPECTRATIO }, ...properties);
}

/**
 * Creates an image aspect ratio icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const imageAspectRatioIcon = (...properties) => {
    const element = document.createElement('div');
    initImageAspectRatioIcon(element, ...properties);
    return element;
}
