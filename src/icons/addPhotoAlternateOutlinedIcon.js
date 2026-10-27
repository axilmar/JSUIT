import { initIcon } from "./icon.js";

//the url of the add photo alternate outlined svg; resolved relative to this module
const URL_ADDPHOTOALTERNATEOUTLINED = new URL('../../assets/icons/addPhotoAlternateOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add photo alternate outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addPhotoAlternateOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddPhotoAlternateOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addPhotoAlternateOutlinedIcon', url: URL_ADDPHOTOALTERNATEOUTLINED }, ...properties);
}

/**
 * Creates an add photo alternate outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addPhotoAlternateOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddPhotoAlternateOutlinedIcon(element, ...properties);
    return element;
}
