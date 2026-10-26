import { initIcon } from "./icon.js";

//the url of the picture as pdf svg; resolved relative to this module
const URL_PICTUREASPDF = new URL('../../assets/icons/pictureAsPdf.svg', import.meta.url).href;

/**
 * Initializes an icon element as a picture as pdf icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pictureAsPdf.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPictureAsPdfIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PICTUREASPDF }, ...properties);
}

/**
 * Creates a picture as pdf icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pictureAsPdfIcon = (...properties) => {
    const element = document.createElement('div');
    initPictureAsPdfIcon(element, ...properties);
    return element;
}
