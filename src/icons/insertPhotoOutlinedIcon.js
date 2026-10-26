import { initIcon } from "./icon.js";

//the url of the insert photo outlined svg; resolved relative to this module
const URL_INSERTPHOTOOUTLINED = new URL('../../assets/icons/insertPhotoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insert photo outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insertPhotoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsertPhotoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INSERTPHOTOOUTLINED }, ...properties);
}

/**
 * Creates an insert photo outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insertPhotoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInsertPhotoOutlinedIcon(element, ...properties);
    return element;
}
