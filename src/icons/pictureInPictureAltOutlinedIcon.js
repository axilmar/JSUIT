import { initIcon } from "./icon.js";

//the url of the picture in picture alt outlined svg; resolved relative to this module
const URL_PICTUREINPICTUREALTOUTLINED = new URL('../../assets/icons/pictureInPictureAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a picture in picture alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pictureInPictureAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPictureInPictureAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pictureInPictureAltOutlinedIcon', url: URL_PICTUREINPICTUREALTOUTLINED }, ...properties);
}

/**
 * Creates a picture in picture alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pictureInPictureAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPictureInPictureAltOutlinedIcon(element, ...properties);
    return element;
}
