import { initIcon } from "./icon.js";

//the url of the add a photo svg; resolved relative to this module
const URL_ADDAPHOTO = new URL('../../assets/icons/addAPhoto.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add a photo icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addAPhoto.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddAPhotoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addAPhotoIcon', url: URL_ADDAPHOTO }, ...properties);
}

/**
 * Creates an add a photo icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addAPhotoIcon = (...properties) => {
    const element = document.createElement('div');
    initAddAPhotoIcon(element, ...properties);
    return element;
}
