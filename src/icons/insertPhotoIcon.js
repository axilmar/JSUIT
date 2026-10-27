import { initIcon } from "./icon.js";

//the url of the insert photo svg; resolved relative to this module
const URL_INSERTPHOTO = new URL('../../assets/icons/insertPhoto.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insert photo icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insertPhoto.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsertPhotoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'insertPhotoIcon', url: URL_INSERTPHOTO }, ...properties);
}

/**
 * Creates an insert photo icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insertPhotoIcon = (...properties) => {
    const element = document.createElement('div');
    initInsertPhotoIcon(element, ...properties);
    return element;
}
