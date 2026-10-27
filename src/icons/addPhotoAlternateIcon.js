import { initIcon } from "./icon.js";

//the url of the add photo alternate svg; resolved relative to this module
const URL_ADDPHOTOALTERNATE = new URL('../../assets/icons/addPhotoAlternate.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add photo alternate icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addPhotoAlternate.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddPhotoAlternateIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addPhotoAlternateIcon', url: URL_ADDPHOTOALTERNATE }, ...properties);
}

/**
 * Creates an add photo alternate icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addPhotoAlternateIcon = (...properties) => {
    const element = document.createElement('div');
    initAddPhotoAlternateIcon(element, ...properties);
    return element;
}
