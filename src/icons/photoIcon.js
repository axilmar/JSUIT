import { initIcon } from "./icon.js";

//the url of the photo svg; resolved relative to this module
const URL_PHOTO = new URL('../../assets/icons/photo.svg', import.meta.url).href;

/**
 * Initializes an icon element as a photo icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/photo.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhotoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHOTO }, ...properties);
}

/**
 * Creates a photo icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const photoIcon = (...properties) => {
    const element = document.createElement('div');
    initPhotoIcon(element, ...properties);
    return element;
}
