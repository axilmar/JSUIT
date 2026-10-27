import { initIcon } from "./icon.js";

//the url of the photo album svg; resolved relative to this module
const URL_PHOTOALBUM = new URL('../../assets/icons/photoAlbum.svg', import.meta.url).href;

/**
 * Initializes an icon element as a photo album icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/photoAlbum.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhotoAlbumIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'photoAlbumIcon', url: URL_PHOTOALBUM }, ...properties);
}

/**
 * Creates a photo album icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const photoAlbumIcon = (...properties) => {
    const element = document.createElement('div');
    initPhotoAlbumIcon(element, ...properties);
    return element;
}
