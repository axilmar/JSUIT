import { initIcon } from "./icon.js";

//the url of the photo size select actual svg; resolved relative to this module
const URL_PHOTOSIZESELECTACTUAL = new URL('../../assets/icons/photoSizeSelectActual.svg', import.meta.url).href;

/**
 * Initializes an icon element as a photo size select actual icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/photoSizeSelectActual.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhotoSizeSelectActualIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHOTOSIZESELECTACTUAL }, ...properties);
}

/**
 * Creates a photo size select actual icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const photoSizeSelectActualIcon = (...properties) => {
    const element = document.createElement('div');
    initPhotoSizeSelectActualIcon(element, ...properties);
    return element;
}
