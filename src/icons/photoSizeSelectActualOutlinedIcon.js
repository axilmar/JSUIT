import { initIcon } from "./icon.js";

//the url of the photo size select actual outlined svg; resolved relative to this module
const URL_PHOTOSIZESELECTACTUALOUTLINED = new URL('../../assets/icons/photoSizeSelectActualOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a photo size select actual outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/photoSizeSelectActualOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhotoSizeSelectActualOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHOTOSIZESELECTACTUALOUTLINED }, ...properties);
}

/**
 * Creates a photo size select actual outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const photoSizeSelectActualOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhotoSizeSelectActualOutlinedIcon(element, ...properties);
    return element;
}
