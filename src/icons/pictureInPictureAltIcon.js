import { initIcon } from "./icon.js";

//the url of the picture in picture alt svg; resolved relative to this module
const URL_PICTUREINPICTUREALT = new URL('../../assets/icons/pictureInPictureAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a picture in picture alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pictureInPictureAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPictureInPictureAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PICTUREINPICTUREALT }, ...properties);
}

/**
 * Creates a picture in picture alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pictureInPictureAltIcon = (...properties) => {
    const element = document.createElement('div');
    initPictureInPictureAltIcon(element, ...properties);
    return element;
}
