import { initIcon } from "./icon.js";

//the url of the photo size select small outlined svg; resolved relative to this module
const URL_PHOTOSIZESELECTSMALLOUTLINED = new URL('../../assets/icons/photoSizeSelectSmallOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a photo size select small outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/photoSizeSelectSmallOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhotoSizeSelectSmallOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'photoSizeSelectSmallOutlinedIcon', url: URL_PHOTOSIZESELECTSMALLOUTLINED }, ...properties);
}

/**
 * Creates a photo size select small outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const photoSizeSelectSmallOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhotoSizeSelectSmallOutlinedIcon(element, ...properties);
    return element;
}
