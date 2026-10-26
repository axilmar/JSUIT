import { initIcon } from "./icon.js";

//the url of the picture in picture outlined svg; resolved relative to this module
const URL_PICTUREINPICTUREOUTLINED = new URL('../../assets/icons/pictureInPictureOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a picture in picture outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pictureInPictureOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPictureInPictureOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PICTUREINPICTUREOUTLINED }, ...properties);
}

/**
 * Creates a picture in picture outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pictureInPictureOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPictureInPictureOutlinedIcon(element, ...properties);
    return element;
}
