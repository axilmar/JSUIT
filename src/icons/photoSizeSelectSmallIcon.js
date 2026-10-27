import { initIcon } from "./icon.js";

//the url of the photo size select small svg; resolved relative to this module
const URL_PHOTOSIZESELECTSMALL = new URL('../../assets/icons/photoSizeSelectSmall.svg', import.meta.url).href;

/**
 * Initializes an icon element as a photo size select small icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/photoSizeSelectSmall.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhotoSizeSelectSmallIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'photoSizeSelectSmallIcon', url: URL_PHOTOSIZESELECTSMALL }, ...properties);
}

/**
 * Creates a photo size select small icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const photoSizeSelectSmallIcon = (...properties) => {
    const element = document.createElement('div');
    initPhotoSizeSelectSmallIcon(element, ...properties);
    return element;
}
