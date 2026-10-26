import { initIcon } from "./icon.js";

//the url of the crop rotate svg; resolved relative to this module
const URL_CROPROTATE = new URL('../../assets/icons/cropRotate.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop rotate icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cropRotate.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCropRotateIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CROPROTATE }, ...properties);
}

/**
 * Creates a crop rotate icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cropRotateIcon = (...properties) => {
    const element = document.createElement('div');
    initCropRotateIcon(element, ...properties);
    return element;
}
