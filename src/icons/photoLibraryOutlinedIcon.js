import { initIcon } from "./icon.js";

//the url of the photo library outlined svg; resolved relative to this module
const URL_PHOTOLIBRARYOUTLINED = new URL('../../assets/icons/photoLibraryOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a photo library outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/photoLibraryOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhotoLibraryOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'photoLibraryOutlinedIcon', url: URL_PHOTOLIBRARYOUTLINED }, ...properties);
}

/**
 * Creates a photo library outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const photoLibraryOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhotoLibraryOutlinedIcon(element, ...properties);
    return element;
}
