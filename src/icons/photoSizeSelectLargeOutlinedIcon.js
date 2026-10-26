import { initIcon } from "./icon.js";

//the url of the photo size select large outlined svg; resolved relative to this module
const URL_PHOTOSIZESELECTLARGEOUTLINED = new URL('../../assets/icons/photoSizeSelectLargeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a photo size select large outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/photoSizeSelectLargeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhotoSizeSelectLargeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHOTOSIZESELECTLARGEOUTLINED }, ...properties);
}

/**
 * Creates a photo size select large outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const photoSizeSelectLargeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhotoSizeSelectLargeOutlinedIcon(element, ...properties);
    return element;
}
